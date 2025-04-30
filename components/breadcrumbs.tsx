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

export function BreadcrumbWithCustomSeparator({
  title,
  obj,
}: {
  title?: string;
  obj?: any;
}) {
  return (
    <Breadcrumb>
      <BreadcrumbList className="space-x-0">
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/"
            className="text-[12px] lg:text-[16px] font-medium text-black"
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        {obj &&
          obj?.map((o: any) => (
            <div key={o.title} className="flex items-center">
              <BreadcrumbSeparator className="gap-0">
                <BiChevronRight className="!size-8 text-black" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={o?.link}
                  className="text-[12px] lg:text-[16px] font-light text-black"
                >
                  {o?.title ? o?.title : "Breadcrumb"}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </div>
          ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
