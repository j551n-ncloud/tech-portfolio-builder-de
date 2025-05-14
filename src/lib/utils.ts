
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Animation utility for staggered animations
export function getStaggeredDelay(index: number, baseDelay: number = 0.1, startDelay: number = 0.2): string {
  return `${startDelay + index * baseDelay}s`;
}

// Animation utility to apply different animations based on viewport entry
export function useInViewAnimation(element: HTMLElement | null, options = {}): boolean {
  if (typeof window === "undefined" || !element) return false;
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, options);
  
  observer.observe(element);
  
  return true;
}
