import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            darkGrey: string;
            grey: string;
            lightGrey: string;
            lightestGrey: string;
            lightestGrey1: string;
            darkRed: string;
            red: string;
            lightRed: string;
            lightestRed: string;
            blue: string;
          };
    }
}