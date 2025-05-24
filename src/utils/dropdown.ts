import { browser } from '$app/environment';
import type { Action } from 'svelte/action';

export interface DropdownHandlers {
  toggleDropdown: (e: MouseEvent) => void;
  closeDropdown: () => void;
  setupOutsideClickHandler: (
    isOpen: boolean,
    containerRef: HTMLElement,
    callback: () => void
  ) => (() => void) | undefined;
  bindFloatingRef: Action<HTMLElement>;
  onEnter: () => void;
  onLeave: (e: PointerEvent) => void;
}

/**
 * Creates handlers for dropdown functionality
 * @param params Configuration parameters
 * @returns Object with dropdown handlers
 */
export function createDropdownHandlers({
  isOpen,
  setIsOpen,
  isMobile = false,
  containerRef,
  toggleCallback,
  closeCallback
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isMobile?: boolean;
  containerRef: HTMLElement | null;
  toggleCallback?: (isOpen: boolean) => void;
  closeCallback?: () => void;
}): DropdownHandlers {
  let outsideClickHandler: ((e: MouseEvent) => void) | null = null;
  let leaveInterval: NodeJS.Timeout;
  let dropdownRef: HTMLElement | null = null;

  // Action to conditionally bind the dropdown reference
  const bindFloatingRef: Action<HTMLElement> = (node) => {
    if (!isMobile) {
      dropdownRef = node;
    }

    return {
      update() {
        if (!isMobile) {
          dropdownRef = node;
        }
      },
      destroy() {
        if (dropdownRef === node) {
          dropdownRef = null;
        }
      }
    };
  };

  /**
   * Cleans up any outside click handlers
   */
  const cleanupOutsideClickHandler = () => {
    if (outsideClickHandler && browser) {
      document.removeEventListener('click', outsideClickHandler);
      outsideClickHandler = null;
    }
  };

  /**
   * Toggles the dropdown
   */
  const toggleDropdown = (e: MouseEvent) => {
    e.stopPropagation(); // Prevent event from bubbling up

    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);

    if (toggleCallback) {
      toggleCallback(newIsOpen);
    }

    if (newIsOpen) {
      setupOutsideClickHandler(newIsOpen, containerRef!, () => {
        setIsOpen(false);
        if (closeCallback) closeCallback();
      });
    } else {
      cleanupOutsideClickHandler();
    }
  };

  /**
   * Closes the dropdown
   */
  const closeDropdown = () => {
    setIsOpen(false);
    cleanupOutsideClickHandler();

    if (closeCallback) {
      closeCallback();
    }
  };

  /**
   * Sets up an outside click handler
   */
  const setupOutsideClickHandler = (isOpen: boolean, containerElement: HTMLElement, callback: () => void) => {
    if (!isOpen || !containerElement || !browser) return;

    cleanupOutsideClickHandler();

    outsideClickHandler = (event: MouseEvent) => {
      if (containerElement && !containerElement.contains(event.target as Node)) {
        callback();
        cleanupOutsideClickHandler();
      }
    };

    // Add with small delay to avoid immediate trigger
    setTimeout(() => {
      if (browser) {
        document.addEventListener('click', outsideClickHandler!);
      }
    }, 10);

    return cleanupOutsideClickHandler;
  };

  /**
   * Handler for pointer enter (hover)
   */
  const onEnter = () => {
    if (isMobile) return; // Skip hover effects on mobile

    if (leaveInterval) {
      clearTimeout(leaveInterval);
    }

    setIsOpen(true);
  };

  /**
   * Handler for pointer leave
   */
  const onLeave = (e: PointerEvent) => {
    if (isMobile) return; // Skip hover effects on mobile

    if (e?.pointerType === 'touch') {
      return;
    }

    if (leaveInterval) {
      clearTimeout(leaveInterval);
    }

    leaveInterval = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return {
    toggleDropdown,
    closeDropdown,
    setupOutsideClickHandler,
    bindFloatingRef,
    onEnter,
    onLeave
  };
}
