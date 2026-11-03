"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { projects } from "../../_data/projects";
import styles from "./project-carousel.module.css";

export default function ProjectCarousel() {
  const viewport = useRef<HTMLDivElement>(null);
  const group = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = viewport.current;
    const firstGroup = group.current;
    if (!element || !firstGroup) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let previous = 0;
    let remainder = 0;
    let loopWidth = 0;
    let dragging = false;
    let resumeAt = 0;

    const measure = () => {
      loopWidth = firstGroup.getBoundingClientRect().width;
      if (!motion.matches && loopWidth > 0 && element.scrollLeft >= loopWidth) {
        element.scrollLeft %= loopWidth;
      }
    };
    measure();
    if (!motion.matches && element.scrollLeft === 0) {
      element.scrollLeft = (element.querySelector<HTMLElement>("article")?.offsetWidth ?? 400) * 0.7;
    }

    const onPointerDown = () => { dragging = true; };
    const onPointerUp = () => {
      if (dragging) {
        dragging = false;
        resumeAt = performance.now() + 1000;
      }
    };
    const onWheel = (event: WheelEvent) => {
      // Vertical page scrolling must not disable the showcase.
      if (Math.abs(event.deltaX) > 0 || event.shiftKey) {
        resumeAt = performance.now() + 1000;
      }
    };
    const resetTiming = () => { previous = 0; };
    const onMotionChange = () => { measure(); resetTiming(); };

    function tick(time: number) {
      const elapsed = previous ? Math.min(time - previous, 50) : 0;
      previous = time;
      const active = document.activeElement;
      const keyboardFocus = active instanceof HTMLElement &&
        element!.contains(active) && active.matches(":focus-visible");

      if (!motion.matches && !document.hidden && !dragging &&
          time >= resumeAt && !keyboardFocus && loopWidth > 0) {
        const distance = elapsed * 0.065 + remainder;
        const pixels = Math.floor(distance);
        remainder = distance - pixels;
        // Keep the fractional remainder and wrap at exactly one copy's width.
        // Both groups include the trailing gap, so the seam has identical spacing.
        element!.scrollLeft = (element!.scrollLeft + pixels) % loopWidth;
      }
      frame = requestAnimationFrame(tick);
    }

    const resize = new ResizeObserver(measure);
    resize.observe(firstGroup);
    element.addEventListener("pointerdown", onPointerDown);
    element.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    window.addEventListener("blur", onPointerUp);
    document.addEventListener("visibilitychange", resetTiming);
    motion.addEventListener("change", onMotionChange);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      element.removeEventListener("pointerdown", onPointerDown);
      element.removeEventListener("wheel", onWheel);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      window.removeEventListener("blur", onPointerUp);
      document.removeEventListener("visibilitychange", resetTiming);
      motion.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <div
      className={styles.carousel}
      role="region"
      aria-roledescription="carousel"
      aria-label="Project showcase"
    >
      <div
        className={styles.viewport}
        ref={viewport}
        tabIndex={0}
        aria-label="Scroll to explore projects"
      >
        <div className={styles.track}>
          {[false, true].map((duplicate) => (
            <div
              key={String(duplicate)}
              className={`${styles.group} ${duplicate ? styles.duplicate : ""}`}
              ref={duplicate ? undefined : group}
              aria-hidden={duplicate || undefined}
              inert={duplicate || undefined}
            >
              {projects.map((project, index) => (
                <article
                  key={project.id}
                  className={`${styles.card} ${project.category === "Mobile app" ? styles.square : styles.wide}`}
                >
                    <div className={styles.image}>
                      <Image
                        src={project.image}
                        alt={duplicate ? "" : `${project.name} project preview`}
                        fill
                        sizes={
                          project.category === "Mobile app"
                            ? "(max-width: 650px) 68vw, 400px"
                            : "(max-width: 650px) 90vw, 710px"
                        }
                        loading={!duplicate && index < 2 ? "eager" : "lazy"}
                        fetchPriority={!duplicate && index < 2 ? "high" : "auto"}
                      />
                    </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
