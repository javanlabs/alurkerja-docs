import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import {BookIcon, ExternalLinkIcon} from "lucide-react";
import {ExternalIcon} from "next/dist/next-devtools/dev-overlay/icons/external";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <img src="https://alurkerja.com/images/AlurKerja.png" width={120} alt=""/>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [
    {
      icon: <ExternalLinkIcon />,
      text: 'Website',
      url: 'https://alurkerja.com',
      secondary: true
    },
    {
      icon: <ExternalLinkIcon />,
      text: 'Blog',
      url: 'https://alurkerja.com/blog'
    }
  ],
};
