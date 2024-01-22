import { extendTheme } from "@chakra-ui/react";
import { StyleConfig } from "@chakra-ui/theme-tools";
const components: Record<string, StyleConfig> = {
    CustomBadge: {
      baseStyle: ({ colorMode }) => ({
        bg: colorMode === "dark" ? " #0f0f0f" : "#fff",
        color: colorMode === "dark" ? "#f1f1f1" : "#000",
      }),
      variants: {
        custom: ({ colorMode }) => ({
          bg: colorMode === "dark" ? "blue.200" : "blue.500",
          padding: "8px"
        })
      }
    }
  };
  
  // 2. Call 'extendTheme' and pass your custom values
  export const customTheme = extendTheme({ components });
  