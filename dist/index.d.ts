import * as react_jsx_runtime from 'react/jsx-runtime';
import { BannerVariant } from '@shopify/retail-ui-extensions-react';

interface IScannerScreen {
    actionText: string;
    assignLabel: string;
    bannerTitle: string;
    onBannerAction: () => void;
    screenTitle: string;
    status: BannerVariant;
}
declare const ScannerScreen: ({ assignLabel, screenTitle, bannerTitle, status, actionText, onBannerAction, }: IScannerScreen) => react_jsx_runtime.JSX.Element;

export { IScannerScreen, ScannerScreen };
