import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Clock, Users, DollarSign } from "lucide-react";
import { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Get The Realtor Snapshot - Free GoHighLevel Setup | DAY-1 AI AUTOMATIONS",
  description: "Get the exact AI Automation System that top 1% agents use to book 10+ appointments a week on autopilot. Free setup included.",
};

export default function BridgePage() {
  const affiliateLink = process.env.NEXT_PUBLIC_GOHIGHLEVEL_AFFILIATE_LINK || "https://www.gohighlevel.com/?fp_ref=day-1-ai-automations87";

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background text-foreground font-sans">
        {/* Hero Section */}
        <section className="relative py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-50" />
          
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            For Real Estate Agents Only
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            The "Unfair Advantage" <br className="hidden md:block" />
            Automated Realtor System
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Stop chasing leads. Get the exact <strong>AI Automation System</strong> that top 1% agents use to book 10+ appointments a week on autopilot.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 h-auto w-full sm:w-auto shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all" asChild>
              <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
                Get The System For FREE <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-2 sm:mt-0">
              *Requires 14-Day Free Trial
            </p>
          </div>
        </section>

        {/* Value Stack Section */}
        <section className="py-16 px-4 bg-muted/30 border-y border-border/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What You Get Inside The "Realtor Snapshot"</h2>
              <p className="text-muted-foreground">We built this entire business-in-a-box so you don't have to.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Instant Setup
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                      <span>Pre-built Website Template</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                      <span>Lead Capture Funnels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                      <span>Appointment Calendar</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    AI Nurture
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                      <span>Auto-SMS Response (Under 2 mins)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                      <span>12-Month Email Drip Campaign</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                      <span>Missed Call Text Back</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    Revenue Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                      <span>Review Request Automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                      <span>Pipeline Management Dashboard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                      <span>Facebook Ads Templates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How To Get This System For FREE</h2>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="font-bold text-primary">1</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-border bg-card shadow-sm">
                <h3 className="text-xl font-bold mb-2">Start Your 14-Day Trial</h3>
                <p className="text-muted-foreground">Click the button below to start your free trial with GoHighLevel (the software that powers this system).</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="font-bold text-muted-foreground">2</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-border bg-card shadow-sm">
                <h3 className="text-xl font-bold mb-2">Import The Snapshot</h3>
                <p className="text-muted-foreground">Once you're in, we'll send you a "Magic Link" that instantly loads the entire Realtor System into your account.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="font-bold text-muted-foreground">3</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-border bg-card shadow-sm">
                <h3 className="text-xl font-bold mb-2">Launch & Get Leads</h3>
                <p className="text-muted-foreground">Follow our 15-minute setup guide to connect your domain and start generating leads immediately.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" className="text-lg px-10 py-8 h-auto shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all" asChild>
              <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
                Start My Free Trial & Get The System <ArrowRight className="ml-2 h-6 w-6" />
              </a>
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
