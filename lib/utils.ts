import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function compareDateWithNow(pastDateString: string): string {
  const pastDate = new Date(pastDateString);
  const now = new Date();

  const diffTime = now.getTime() - pastDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  if (diffYears > 0) {
    return diffYears === 1 ? "1 years" : `${diffYears} years`;
  } else if (diffMonths > 0) {
    return diffMonths === 1 ? "1 month" : `${diffMonths} month`;
  } else if (diffDays > 0) {
    return diffDays === 1 ? "1 days" : `${diffDays} days`;
  } else {
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    if (diffHours > 0) {
      return diffHours === 1 ? "1 hour" : `${diffHours} hour`;
    } else {
      const diffMinutes = Math.floor(diffTime / (1000 * 60));
      return diffMinutes === 0
        ? "less than a minute"
        : diffMinutes === 1
        ? "1 minute"
        : `${diffMinutes} minute`;
    }
  }
}