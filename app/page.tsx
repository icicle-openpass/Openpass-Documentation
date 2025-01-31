import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon, TerminalSquareIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[85.5vh] min-h-[85vh] flex-col items-center justify-center text-center px-2 sm:py-8 py-12">
      <h1 className="text-3xl font-bold mb-4 sm:text-6xl">
        OpenPASS is an open-source platform compatable with multiple small unmanned aerial systems that works with a push of a button.
      </h1>
      <p className="mb-8 sm:text-lg max-w-[800px] text-muted-foreground">
        This is a research product from the ReRout Lab at the Ohio State University.
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/docs${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Stared
        </Link>
      </div>
      <span className="flex flex-row items-start sm:gap-2 gap-0.5 text-muted-foreground text-md mt-7 -mb-12 max-[800px]:mb-12 font-code sm:text-base text-sm font-medium">
        <TerminalSquareIcon className="w-5 h-5 sm:mr-1 mt-0.5" />
        {"sudo curl -sfL http://149.165.155.188:2298/icicleEdgeConfigureTool.sh > install.sh; bash ./install.sh "}
      </span>
    </div>
  );
}
