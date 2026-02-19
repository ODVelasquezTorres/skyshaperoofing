import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronsLeftRight } from 'lucide-react';
import './BeforeAfterSlider.css';

const BeforeAfterSlider = ({
    beforeImage,
    afterImage,
    beforeLabel = "BEFORE (Old Roof)",
    afterLabel = "AFTER (SkyShape System)"
}) => {
    const [sliderSearch, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    const handleMove = useCallback((clientX) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
            const percentage = (x / rect.width) * 100;
            setSliderPosition(percentage);
        }
    }, []);

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = useCallback((e) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    }, [isDragging, handleMove]);

    const handleTouchMove = useCallback((e) => {
        handleMove(e.touches[0].clientX);
    }, [handleMove]);

    // Global event listeners for dragging interaction outside the component
    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, handleMouseMove]);

    return (
        <div
            className="ba-slider-container"
            ref={containerRef}
            onTouchMove={handleTouchMove}
        >
            {/* After Image (Background) */}
            <div className="ba-layer ba-after">
                <img src={afterImage} alt="After Result" />
                <span className="ba-badge ba-badge-right">{afterLabel}</span>
            </div>

            {/* Before Image (Foreground, Clipped) */}
            <div
                className="ba-layer ba-before"
                style={{ clipPath: `inset(0 ${100 - sliderSearch}% 0 0)` }}
            >
                <img src={beforeImage} alt="Before Condition" />
                <span className="ba-badge ba-badge-left">{beforeLabel}</span>
            </div>

            {/* Slider Handle */}
            <div
                className="ba-handle"
                style={{ left: `${sliderSearch}%` }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
            >
                <div className="ba-line"></div>
                <div className="ba-circle">
                    <ChevronsLeftRight size={24} color="#007BFF" />
                </div>
            </div>
        </div>
    );
};

export default BeforeAfterSlider;
