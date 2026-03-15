import { useRef, useState } from "react";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  title: string;
}

const BeforeAfterSlider = ({ before, after, title }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden select-none cursor-ew-resize rounded-t-3xl"
      style={{ aspectRatio: "4/3" }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <img
          src={after}
          alt={`${title} - After`}
          className="absolute inset-0 w-full h-full object-cover object-center"
          draggable={false}
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-sage-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg tracking-wider">
          AFTER
        </div>
      </div>

      {/* Before Image (Overlay with clip) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={before}
          alt={`${title} - Before`}
          className="absolute inset-0 w-full h-full object-cover object-center"
          draggable={false}
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg tracking-wider">
          BEFORE
        </div>
      </div>

      {/* Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)] pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      />

      {/* Slider Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-white ring-2 ring-black/10">
          <div className="flex gap-0.5">
            <svg width="6" height="14" viewBox="0 0 6 14" fill="none">
              <path d="M1 1L1 13M5 1L5 13" stroke="#555" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Hint text - only show at start */}
      {sliderPosition === 50 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-3 py-1 rounded-full pointer-events-none whitespace-nowrap">
          ← Geser untuk compare →
        </div>
      )}
    </div>
  );
};

export default BeforeAfterSlider;
