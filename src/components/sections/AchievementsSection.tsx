import { Trophy } from "lucide-react";
import { achievements } from "@/data/achievements";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";

export function AchievementsSection() {
  return (
    <SectionShell id="achievements" className="bg-white">
      <SectionHeader
        eyebrow="Achievements"
        title="Selected milestones and documented progress."
        description="This section can grow into competition results, academic accomplishments, selected recognitions, and product milestones."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {achievements.map((achievement) => (
          <article key={achievement.title} className="rounded-lg border border-line bg-surface p-5">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-accent-coral shadow-hairline">
                <Trophy aria-hidden="true" className="h-5 w-5" />
              </div>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-muted shadow-hairline">
                {achievement.year}
              </span>
            </div>
            <h3 className="text-base font-semibold leading-6 text-ink">{achievement.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{achievement.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
