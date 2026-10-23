type ClassValue = string | false | null | undefined;

/** Join class names, ignoring falsy values. */
export const cx = (...classes: ClassValue[]): string => classes.filter(Boolean).join(' ');
