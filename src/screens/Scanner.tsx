import React from 'react';
import {
  Banner,
  BannerVariant,
  Button,
  CameraScanner,
  Screen,
} from '@shopify/retail-ui-extensions-react';

export interface IScannerScreen {
  actionText: string;
  assignLabel: string;
  bannerTitle: string;
  onBannerAction: () => void;
  screenTitle: string;
  status: BannerVariant;
}

export const ScannerScreen = ({
  assignLabel,
  screenTitle,
  bannerTitle,
  status,
  actionText,
  onBannerAction,
}: IScannerScreen) => (
  <Screen name="scanner" title={screenTitle}>
    <Banner
      variant={status}
      title={bannerTitle}
      action={actionText}
      onPress={onBannerAction}
      visible
    />
    {status === 'error' && (
      <Button title={assignLabel} onPress={onBannerAction} />
    )}
    <CameraScanner />
  </Screen>
);
