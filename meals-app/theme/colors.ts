const Colors = {
    // Background colors
    background: {
        primary: '#FFFFFF',   // Pure white for main backgrounds
        secondary: '#F7F9FC', // Soft blue-tinted white for secondary backgrounds
        tertiary: '#EDF2F7',  // Light grayish blue for depth and contrast
    },

    // Foreground colors
    foreground: {
        primary: '#2D3748',   // Deep blue-gray for primary text
        secondary: '#4A5568', // Medium gray for secondary text
        tertiary: '#718096',  // Lighter gray for tertiary text
    },

    // Accent colors
    accent: {
        primary: '#3B82F6',   // Vibrant blue for primary actions and highlights
        secondary: '#10B981', // Fresh green for success states and secondary accents
        tertiary: '#F59E0B',  // Warm amber for warnings and tertiary accents
    },

    // Additional shades
    shades: {
        light: '#F8FAFC',     // Nearly white for subtle backgrounds
        dark: '#1A202C',      // Very dark blue-gray for high contrast elements
    },

    // Semantic colors
    semantic: {
        error: '#EF4444',     // Bright red for error states
        success: '#10B981',   // Green for success states (same as accent.secondary)
        info: '#3B82F6',      // Blue for informational states (same as accent.primary)
        warning: '#F59E0B',   // Amber for warning states (same as accent.tertiary)
    }
}

export default Colors;