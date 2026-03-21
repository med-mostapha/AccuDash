import Link from "next/link";
import Image from "next/image";
import {
  ArrowRightIcon,
  ChartBarIcon,
  DocumentTextIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Logo from "@/app/ui/branding/Logo";
import Container from "@/app/ui/design-system/Container";
import Button from "@/app/ui/design-system/Button";
import Card from "@/app/ui/design-system/Card";
import GradientText from "@/app/ui/design-system/GradientText";
import AnimatedSection from "@/app/ui/design-system/AnimatedSection";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-neutral-50 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background Decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        </div>

        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <AnimatedSection animation="fade-in-up">
              <div className="space-y-8">
                {/* Logo */}
                <Logo className="scale-110 origin-left" />

                {/* Title */}
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  <GradientText animated className="block mb-2">
                    Smart Business
                  </GradientText>
                  <span className="text-neutral-900 dark:text-white">
                    Financial Intelligence
                  </span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-xl">
                  Manage invoices, track customers, and gain real-time insights
                  into your business performance with our modern dashboard.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/dashboard">
                    <Button
                      variant="primary"
                      size="lg"
                      icon={<ArrowRightIcon />}
                    >
                      Get Started
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button variant="outline" size="lg">
                      Sign In
                    </Button>
                  </Link>
                </div>

                {/* Stats */}
              </div>
            </AnimatedSection>

            {/* Right Content - Dashboard Preview */}
            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-20 blur-3xl rounded-3xl" />

                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800">
                  <Image
                    src="/hero-desktop.png"
                    width={1000}
                    height={760}
                    alt="AccuDash Dashboard Preview"
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900/50">
        <Container>
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <GradientText>Powerful Features</GradientText>
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                Everything you need to manage your business finances in one
                place
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <AnimatedSection animation="fade-in-up" delay={100}>
              <Card variant="elevated" hover className="h-full">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-950 rounded-lg flex items-center justify-center">
                    <ChartBarIcon className="w-6 h-6 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                    Real-time Analytics
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Track your revenue, pending invoices, and customer activity
                    with live data visualization.
                  </p>
                </div>
              </Card>
            </AnimatedSection>

            {/* Feature 2 */}
            <AnimatedSection animation="fade-in-up" delay={200}>
              <Card variant="elevated" hover className="h-full">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-accent-100 dark:bg-accent-950 rounded-lg flex items-center justify-center">
                    <DocumentTextIcon className="w-6 h-6 text-accent-500" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                    Invoice Management
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Create, edit, and manage invoices effortlessly with our
                    intuitive interface.
                  </p>
                </div>
              </Card>
            </AnimatedSection>

            {/* Feature 3 */}
            <AnimatedSection animation="fade-in-up" delay={300}>
              <Card variant="elevated" hover className="h-full">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-950 rounded-lg flex items-center justify-center">
                    <UsersIcon className="w-6 h-6 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                    Customer Insights
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Understand your customers better with detailed transaction
                    history and analytics.
                  </p>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <Container size="md">
          <AnimatedSection animation="scale-in">
            <Card variant="glass" padding="lg" className="text-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to <GradientText animated>Transform</GradientText> Your
                  Business?
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
                  Join hundreds of businesses already using AccuDash to
                  streamline their financial operations.
                </p>
                <Link href="/login">
                  <Button variant="primary" size="lg" icon={<ArrowRightIcon />}>
                    Start Now - It's Free
                  </Button>
                </Link>
              </div>
            </Card>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}
