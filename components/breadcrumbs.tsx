import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BiChevronRight } from "react-icons/bi";

export function BreadcrumbWithCustomSeparator({ title }: { title?: string }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/"
            className="text-[12px] lg:text-[16px] font-medium text-black"
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator>
          <BiChevronRight className="!size-8 text-black" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage className="text-[12px] lg:text-[16px] font-light text-black">
            {title ? title : "Breadcrumb"}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
