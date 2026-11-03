import { ArrowUpRight, Braces, Check, MousePointer2, Sparkles } from "lucide-react";

export default function ProductCanvas() {
  return (
    <div
      className="product-canvas"
      aria-label="Illustration of design, engineering and intelligence coming together"
    >
      <div className="canvas-top">
        <span>
          <span className="status-dot" /> THE BUILD SPACE
        </span>
        <span>01 — ∞</span>
      </div>
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />
      <div className="orbital-star">✳</div>
      <div className="design-window">
        <div className="window-top">
          <span className="window-dots">● ● ●</span>
          <span>make something matter</span>
          <MousePointer2 size={11} />
        </div>
        <div className="design-inner">
          <span className="mini-label">IDEA → EXPERIENCE</span>
          <div className="design-type">
            A little bold.
            <br />A lot <i>better.</i>
          </div>
          <div className="design-colors">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="design-selection">
            <span />
            <span />
            <span />
            <span />
            Made for humans.
          </div>
        </div>
        <div className="cursor-tag">
          <MousePointer2 size={18} fill="currentColor" /> Design
        </div>
      </div>
      <div className="code-window">
        <div className="code-header">
          <Braces size={15} />
          <span>possibility.tsx</span>
          <span className="code-circle" />
        </div>
        <div className="code-lines">
          <div>
            <em>01</em>
            <span className="code-purple">const</span> nextBigThing =
            &#123;
          </div>
          <div>
            <em>02</em>&nbsp; idea:{" "}
            <span className="code-green">&quot;yours&quot;</span>,
          </div>
          <div>
            <em>03</em>&nbsp; craft:{" "}
            <span className="code-green">&quot;ours&quot;</span>,
          </div>
          <div>
            <em>04</em>&nbsp; possibilities:{" "}
            <span className="code-orange">Infinity</span>
          </div>
          <div>
            <em>05</em>&#125;;
          </div>
        </div>
        <div className="code-status">
          <Check size={11} /> Ready for the real world
        </div>
      </div>
      <div className="ai-pill">
        <Sparkles size={16} />
        <span>A little intelligence. A big leap.</span>
      </div>
      <div className="canvas-bottom">
        <span>DESIGN × ENGINEERING × INTELLIGENCE</span>
        <ArrowUpRight size={20} />
      </div>
    </div>
  );
}
