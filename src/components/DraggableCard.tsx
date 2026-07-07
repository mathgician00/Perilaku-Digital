import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface DraggableCardProps {
  id: string;
  text: string;
  reason?: string;
  cat?: string; // correct category
  isChecked?: boolean;
  currentZone?: string;
}

export function DraggableCard({ id, text, reason, cat, isChecked, currentZone }: DraggableCardProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: id,
    disabled: isChecked, // disable dragging once checked
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    zIndex: isDragging ? 999 : undefined,
  } : undefined;

  let stateClasses = "bg-white border-slate-200 text-slate-700";
  
  if (isChecked) {
    if (currentZone === "pool") {
      stateClasses = "border-rose-500 bg-rose-50 text-rose-700";
    } else if (cat === currentZone) {
      stateClasses = "border-emerald-500 bg-emerald-50 text-emerald-700";
    } else {
      stateClasses = "border-rose-500 bg-rose-50 text-rose-700";
    }
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={cn(
        "border shadow-sm p-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold flex flex-col justify-center leading-tight cursor-grab touch-none select-none transition-colors w-full sm:w-auto",
        isDragging && "opacity-50 scale-95 shadow-lg",
        !isDragging && !isChecked && "active:cursor-grabbing",
        stateClasses
      )}
    >
      <div>{text}</div>
      {isChecked && (
        <div className="mt-2 pt-2 border-t border-black/10 text-[11px] font-normal opacity-90">
          {reason}
        </div>
      )}
    </div>
  );
}
