import { WeExportView } from "~/modules/we-export/ui/views/we-export-view";
import type { Route } from "./+types/we-export";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Export Services - Worldwide Shipping Solutions | Hiyana World Logistics",
    },
    {
      name: "description",
      content:
        "Professional export freight services to worldwide destinations. FCL/LCL consolidation, air freight, project cargo, and breakbulk solutions. Competitive rates with 30-45 days free storage at major Indian ports.",
    },
  ];
}

export default function WeExport() {
  return <WeExportView />;
}
