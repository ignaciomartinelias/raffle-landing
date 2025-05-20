import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { LucideIcon, MoveRight } from "lucide-react";

type ProductBannerProps = {
  description?: string;
  iconClassName?: string;
  title?: string;
  Icon?: LucideIcon;
};

export const ProductBanner: React.FC<ProductBannerProps> = ({
  description,
  iconClassName,
  title,
  Icon,
}) => {
  const controls = useAnimation();
  return (
    <div className="bg-neutral-50 w-full cursor-pointer overflow-hidden rounded-3xl shadow-sm transition-all duration-300 hover:scale-[1.02] border border-neutral-200 border-dotted hover:bg-background hover:shadow-lg">
      <motion.div
        onHoverStart={() => controls.start("hover")}
        onHoverEnd={() => controls.start("initial")}
        className="group relative h-[400px] w-full rounded-3xl p-8 opacity-80 duration-500 hover:opacity-100"
      >
        <div className="absolute top-1/2 left-1/2 h-2/5 w-2/3 -translate-x-1/2 -translate-y-2/3 transform rounded-full bg-neutral-500/10 opacity-90 blur-3xl transition-all duration-700 group-hover:bg-neutral-500/10 group-hover:opacity-100" />
        <div
          className={cn(
            "absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-[60%] transform rounded-full transition-transform duration-700 group-hover:scale-[1.05]",
            iconClassName
          )}
        ></div>
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-row justify-end">
            <motion.div className="bg-neutral-200/30 text-muted-foreground flex border border-neutral-100 h-full origin-right scale-0 flex-row items-center gap-2 self-end rounded-full backdrop-blur-[2px] px-4 z-50 py-2 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
              <p className="text-xs font-medium">Read more</p>
              <MoveRight className="size-3" />
            </motion.div>
          </div>
          <div className="w-full h-1/2 flex items-center justify-center relative">
            <div className="flex w-fit items-center justify-center p-7 border border-neutral-200/40 border-dotted rounded-full">
              <div className="flex w-fit items-center justify-center p-6 border border-neutral-200/60 border-dashed rounded-full">
                <div className="flex w-fit items-center justify-center p-5 border border-neutral-200/80 border-dotted rounded-full">
                  <div className="flex w-fit items-center justify-center p-4 border border-neutral-200 border-dashed rounded-full">
                    {Icon && (
                      <div
                        className={cn(
                          "p-4 relative rounded-full",
                          iconClassName
                        )}
                      >
                        <div
                          className={cn(
                            "rounded-full top-0 left-0 h-full w-full absolute animate-ping -z-50 opacity-5",
                            iconClassName
                          )}
                        />
                        <Icon className="size-8 stroke-2 text-neutral-50" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="text-sm  text-muted-foreground text-balance">
              {title}
            </p>
            <p className="text-neutral-0 text-lg font-semibold tracking-tight text-balance">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
