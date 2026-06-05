import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

export function SectionShell({ id, children, className, containerClassName }: SectionShellProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 sm:py-24", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
