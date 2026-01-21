import { Button } from "@/components/ui/button";
import { moviesImg } from "@/lib/data";
import { ArrowRight, Plus } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto wrapper">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-start lg:justify-center space-y-8">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Your Personal Watchlist
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Keep Track of Your
                <span className="text-primary"> Favorites</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Save movies and series you love. Organize them by status and
                drag them to track your progress. Never forget what you want to
                watch.
              </p>
            </div>

            <div className="space-y-3">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base gap-2">
                <Plus className="h-5 w-5" />
                Start Your Watchlist
              </Button>
              <Button
                variant="outline"
                className="w-full border-primary/20 text-foreground hover:bg-muted h-12 text-base gap-2 bg-transparent"
              >
                Explore Features
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4 p-6 rounded-xl bg-secondary/30 border border-border/50">
            <h3 className="text-sm font-semibold text-foreground">
              How it works
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold">
                  1
                </span>
                <span>Add movies and series to your list</span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold">
                  2
                </span>
                <span>Organize by status: To Watch, Watching, Completed</span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold">
                  3
                </span>
                <span>Drag & drop to update progress</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="columns-2 lg:columns-3 gap-4 space-y-6 lg:w-10/12">
          {moviesImg.map((movie) => (
            <div
              key={movie.id}
              className="break-inside-avoid group relative overflow-hidden rounded-xl bg-card shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
            >
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={movie.image || "/placeholder.svg"}
                  alt={movie.title}
                  fill
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  priority
                  sizes="(max-width: 468px)"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-primary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-1 font-mono">
                    {movie.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/90 mb-4">
                    {movie.genre}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
