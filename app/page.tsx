'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { WaitlistForm } from '@/components/waitlist-form'
import { Spotlight } from '@/components/ui/spotlight'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Sparkles,
  Zap,
  GitBranch,
  Bug,
  Users,
  Upload,
  Download,
  Search,
  Bot,
  Gauge,
  Link2,
  BarChart3,
  UsersRound,
  Check,
  X,
  ArrowRight,
  Quote,
} from 'lucide-react'

// ============================================================================
// FlowFox Landing Page - Premium Dark Mode Design System
// Foxfire Orange + Void Slate + Plasma Blue
// ============================================================================

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#020617] text-slate-50 overflow-x-hidden">
      {/* FlowFox Background Glow Effects */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Main Orange Glow - Hero area */}
        <div className="glow-blob-orange absolute top-1/4 left-1/2 -translate-x-1/2" />
        {/* Plasma Blue Accent */}
        <div className="glow-blob-blue absolute top-2/3 right-0" />
        {/* Subtle Orange bottom glow */}
        <div className="absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[150px]" />
      </div>

      {/* Animations */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes aurora {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.15; }
          50% { transform: translateY(-20px) rotate(2deg); opacity: 0.25; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.4); }
          50% { box-shadow: 0 0 40px rgba(249, 115, 22, 0.6); }
        }
      `}</style>

      {/* HEADER */}
      <header className="absolute inset-x-0 top-0 z-20 border-b border-slate-800 py-4 md:py-6">
        <div className="flex items-center justify-center">
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
            <span className="gradient-text-orange">FlowFox</span>
          </span>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 px-6 pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
        {/* Aceternity UI Spotlights with Orange tint */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="rgba(249, 115, 22, 0.4)"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left">
              <Badge className="mb-6 gap-1.5 border-orange-500/30 bg-orange-500/10 px-3 py-1.5 text-xs text-orange-400">
                <Sparkles className="h-3.5 w-3.5" />
                Now in Early Access
              </Badge>

              <h1 className="font-[family-name:var(--font-jetbrains-mono)] tracking-tight">
                <span className="block text-4xl font-bold text-slate-50 sm:text-5xl md:text-6xl lg:text-7xl">AI Workflow Review</span>
                <span className="block text-3xl font-semibold gradient-text-orange mt-2 sm:text-4xl md:text-5xl lg:text-6xl">for Automation Tools</span>
              </h1>

              <p className="mx-auto lg:mx-0 mt-6 max-w-2xl text-sm text-slate-400 sm:text-base md:text-lg px-4 sm:px-0">
                Catch logic errors, missing validations, and broken paths before deployment.
                Get AI-powered fixes and ship with confidence.
              </p>

              <p className="mx-auto lg:mx-0 mt-3 max-w-2xl text-sm text-slate-500 px-4 sm:px-0">
                Like CodeRabbit — but for Make, n8n, and Zapier workflows.
              </p>

              <WaitlistForm className="max-w-md mx-auto lg:mx-0 mt-8" showToolSelect={false} />

              <p className="mt-3 text-sm text-slate-500">
                <span
                  className="gradient-text-orange font-bold text-lg inline-block"
                  style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
                >500+</span> developers on the waitlist
              </p>
            </div>

            {/* Right side - Screenshot with Orange Glow */}
            <div className="mt-8 lg:mt-0 relative">
              {/* Background glow blob behind screenshot */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="h-[400px] w-[500px] rounded-full bg-orange-500/20 blur-[100px]" />
              </div>
              <div
                className="relative rounded-2xl border border-slate-800 bg-slate-900/80 p-2 shadow-2xl"
                style={{ animation: 'float 6s ease-in-out infinite' }}
              >
                <Image
                  src="/screenshots/review-results.png"
                  alt="AI workflow review showing issues and fixes"
                  width={600}
                  height={400}
                  className="rounded-xl border border-slate-700 opacity-95 hover:opacity-100 transition-opacity duration-300"
                  priority
                />
                {/* Floating accent card */}
                <div className="absolute -bottom-4 -left-4 rounded-xl border border-orange-500/30 bg-slate-900/95 px-4 py-3 shadow-xl backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
                      <Check className="h-4 w-4 text-green-400" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-50">3 issues found</p>
                      <p className="text-xs text-orange-400">Auto-fix available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUILT FOR TEAMS USING - Grayscale Logos */}
      <section className="relative z-10 border-b border-slate-800 px-6 py-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-slate-600">Built for teams using</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-16">
            <span className="text-2xl font-bold text-slate-500 logo-grayscale cursor-pointer md:text-3xl">n8n</span>
            <span className="text-2xl font-bold text-slate-500 logo-grayscale cursor-pointer md:text-3xl">Make</span>
            <span className="text-2xl font-bold text-slate-500 logo-grayscale cursor-pointer md:text-3xl">Zapier</span>
            <span className="text-2xl font-bold text-slate-500 logo-grayscale cursor-pointer md:text-3xl">Airtable</span>
            <span className="text-2xl font-bold text-slate-500 logo-grayscale cursor-pointer md:text-3xl">Notion</span>
          </div>
        </div>
      </section>

      {/* SEE IT IN ACTION - Tabbed Screenshot Section */}
      <section className="relative z-10 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <Badge className="mb-4 border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs text-orange-400">
              Product Preview
            </Badge>
            <h2 className="font-[family-name:var(--font-jetbrains-mono)] text-3xl font-bold text-slate-50 md:text-4xl">
              See <span className="gradient-text-orange">FlowFox</span> In Action
            </h2>
          </div>

          <Tabs defaultValue="find-issues" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-slate-900 border border-slate-800 rounded-xl p-1 mb-8">
              <TabsTrigger
                value="find-issues"
                className="rounded-lg data-[state=active]:bg-orange-600 data-[state=active]:text-white text-slate-400 transition-all"
              >
                Find Issues
              </TabsTrigger>
              <TabsTrigger
                value="auto-fix"
                className="rounded-lg data-[state=active]:bg-orange-600 data-[state=active]:text-white text-slate-400 transition-all"
              >
                Auto-Fix
              </TabsTrigger>
              <TabsTrigger
                value="track-quality"
                className="rounded-lg data-[state=active]:bg-orange-600 data-[state=active]:text-white text-slate-400 transition-all"
              >
                Track Quality
              </TabsTrigger>
            </TabsList>

            <TabsContent value="find-issues" className="mt-0">
              <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-3 md:p-4 shadow-2xl shadow-black/50">
                <Image
                  src="/screenshots/review-results.png"
                  alt="AI-powered workflow review showing detected issues"
                  width={1200}
                  height={700}
                  className="rounded-xl w-full border border-slate-700 opacity-95 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="text-center mt-4 text-sm text-slate-500">
                AI analyzes every step of your workflow and identifies potential issues
              </p>
            </TabsContent>

            <TabsContent value="auto-fix" className="mt-0">
              <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-3 md:p-4 shadow-2xl shadow-black/50">
                <Image
                  src="/screenshots/auto-fix-diff.png"
                  alt="Before and after diff view of auto-fix suggestions"
                  width={1200}
                  height={700}
                  className="rounded-xl w-full border border-slate-700 opacity-95 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="text-center mt-4 text-sm text-slate-500">
                See exactly what changes will be made with detailed before/after diff views
              </p>
            </TabsContent>

            <TabsContent value="track-quality" className="mt-0">
              <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-3 md:p-4 shadow-2xl shadow-black/50">
                <Image
                  src="/screenshots/dashboard.png"
                  alt="Quality metrics dashboard showing workflow health"
                  width={1200}
                  height={700}
                  className="rounded-xl w-full border border-slate-700 opacity-95 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="text-center mt-4 text-sm text-slate-500">
                Track workflow quality metrics and improvements over time
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="relative z-10 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <Badge className="mb-4 border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs text-orange-400">
              The Problem
            </Badge>
            <h2 className="font-[family-name:var(--font-jetbrains-mono)] text-3xl font-bold text-slate-50 md:text-4xl">
              Automation Workflows Aren&apos;t Code-Reviewed
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="group rounded-2xl border border-slate-800 bg-transparent p-6 transition-all card-hover-orange">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800">
                <GitBranch className="h-6 w-6 text-slate-400 group-hover:text-orange-400 transition-colors" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-50">No review process for workflows</h3>
              <p className="text-sm text-slate-500">
                You review code. Why not review automations? Workflows go to production unchecked.
              </p>
            </div>

            <div className="group rounded-2xl border border-slate-800 bg-transparent p-6 transition-all card-hover-orange">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800">
                <Bug className="h-6 w-6 text-slate-400 group-hover:text-orange-400 transition-colors" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-50">Bugs caught in production</h3>
              <p className="text-sm text-slate-500">
                Broken workflows = lost revenue + debugging hours. You find issues from angry users.
              </p>
            </div>

            <div className="group rounded-2xl border border-slate-800 bg-transparent p-6 transition-all card-hover-orange">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800">
                <Users className="h-6 w-6 text-slate-400 group-hover:text-orange-400 transition-colors" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-50">No second pair of eyes</h3>
              <p className="text-sm text-slate-500">
                Solo developers ship without feedback. Even teams lack workflow review culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION - HOW IT WORKS */}
      <section className="relative z-10 border-y border-slate-800 bg-slate-900/30 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <Badge className="mb-4 border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs text-orange-400">
              The Solution
            </Badge>
            <h2 className="font-[family-name:var(--font-jetbrains-mono)] text-3xl font-bold text-slate-50 md:text-4xl">
              How <span className="gradient-text-orange">FlowFox</span> Reviews Your Automations
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="relative text-center">
              <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/30 shadow-lg">
                <Upload className="h-7 w-7 text-orange-400" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-orange-600 text-xs font-bold text-white foxfire-glow">1</span>
              </div>
              {/* Connecting line */}
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-blue-500/50 to-transparent" />
              <h3 className="mb-2 text-lg font-semibold text-slate-50">Upload or Connect</h3>
              <p className="text-sm text-slate-500">
                Export JSON or connect your Make/n8n account directly for seamless sync.
              </p>
            </div>

            <div className="relative text-center">
              <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/30 shadow-lg">
                <Sparkles className="h-7 w-7 text-orange-400" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-orange-600 text-xs font-bold text-white foxfire-glow">2</span>
              </div>
              {/* Connecting line */}
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-blue-500/50 to-transparent" />
              <h3 className="mb-2 text-lg font-semibold text-slate-50">AI Reviews Every Step</h3>
              <p className="text-sm text-slate-500">
                Claude analyzes logic, data flow, and error handling in seconds.
              </p>
            </div>

            <div className="relative text-center">
              <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/30 shadow-lg">
                <Download className="h-7 w-7 text-orange-400" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-orange-600 text-xs font-bold text-white foxfire-glow">3</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-50">Get Instant Fixes</h3>
              <p className="text-sm text-slate-500">
                Download corrected workflow or apply fixes automatically with one click.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="relative z-10 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <Badge className="mb-4 border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs text-orange-400">
              Features
            </Badge>
            <h2 className="font-[family-name:var(--font-jetbrains-mono)] text-3xl font-bold text-slate-50 md:text-4xl">
              Everything You Need for Reliable Workflows
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-2xl border border-slate-800 bg-transparent p-6 transition-all card-hover-orange">
              <Search className="mb-4 h-8 w-8 text-slate-400 group-hover:text-orange-400 transition-colors" />
              <h4 className="mb-2 text-lg font-semibold text-slate-50">Deep Analysis</h4>
              <ul className="space-y-1.5 text-sm text-slate-400">
                <li><span className="text-orange-500 mr-2">•</span>Logic errors detection</li>
                <li><span className="text-orange-500 mr-2">•</span>Missing error handlers</li>
                <li><span className="text-orange-500 mr-2">•</span>Data type mismatches</li>
                <li><span className="text-orange-500 mr-2">•</span>Inefficient routing</li>
              </ul>
            </div>

            <div className="group rounded-2xl border border-slate-800 bg-transparent p-6 transition-all card-hover-orange">
              <Bot className="mb-4 h-8 w-8 text-slate-400 group-hover:text-orange-400 transition-colors" />
              <h4 className="mb-2 text-lg font-semibold text-slate-50">Auto-Fix</h4>
              <ul className="space-y-1.5 text-sm text-slate-400">
                <li><span className="text-orange-500 mr-2">•</span>AI generates corrected workflow</li>
                <li><span className="text-orange-500 mr-2">•</span>Before/after diff view</li>
                <li><span className="text-orange-500 mr-2">•</span>One-click download</li>
                <li><span className="text-orange-500 mr-2">•</span>Direct push to Make/n8n</li>
              </ul>
            </div>

            <div className="group rounded-2xl border border-slate-800 bg-transparent p-6 transition-all card-hover-orange">
              <Gauge className="mb-4 h-8 w-8 text-slate-400 group-hover:text-orange-400 transition-colors" />
              <h4 className="mb-2 text-lg font-semibold text-slate-50">Fast Reviews</h4>
              <ul className="space-y-1.5 text-sm text-slate-400">
                <li><span className="text-orange-500 mr-2">•</span>Results in &lt; 30 seconds</li>
                <li><span className="text-orange-500 mr-2">•</span>Step-by-step feedback</li>
                <li><span className="text-orange-500 mr-2">•</span>Actionable suggestions</li>
                <li><span className="text-orange-500 mr-2">•</span>No manual checking</li>
              </ul>
            </div>

            <div className="group rounded-2xl border border-slate-800 bg-transparent p-6 transition-all card-hover-orange">
              <Link2 className="mb-4 h-8 w-8 text-slate-400 group-hover:text-orange-400 transition-colors" />
              <h4 className="mb-2 text-lg font-semibold text-slate-50">Direct Integration</h4>
              <ul className="space-y-1.5 text-sm text-slate-400">
                <li><span className="text-orange-500 mr-2">•</span>Connect Make.com account</li>
                <li><span className="text-orange-500 mr-2">•</span>Connect n8n (Cloud + self-hosted)</li>
                <li><span className="text-orange-500 mr-2">•</span>Auto-fetch workflows</li>
                <li><span className="text-orange-500 mr-2">•</span>Auto-apply fixes</li>
              </ul>
            </div>

            <div className="group rounded-2xl border border-slate-800 bg-transparent p-6 transition-all card-hover-orange">
              <BarChart3 className="mb-4 h-8 w-8 text-slate-400 group-hover:text-orange-400 transition-colors" />
              <h4 className="mb-2 text-lg font-semibold text-slate-50">Quality Metrics</h4>
              <ul className="space-y-1.5 text-sm text-slate-400">
                <li><span className="text-orange-500 mr-2">•</span>Workflow complexity score</li>
                <li><span className="text-orange-500 mr-2">•</span>Error probability rating</li>
                <li><span className="text-orange-500 mr-2">•</span>Best practice compliance</li>
                <li><span className="text-orange-500 mr-2">•</span>Trend tracking</li>
              </ul>
            </div>

            <div className="group rounded-2xl border border-slate-800 bg-transparent p-6 transition-all card-hover-orange">
              <UsersRound className="mb-4 h-8 w-8 text-slate-400 group-hover:text-orange-400 transition-colors" />
              <h4 className="mb-2 text-lg font-semibold text-slate-50">Team Reviews</h4>
              <ul className="space-y-1.5 text-sm text-slate-400">
                <li><span className="text-orange-500 mr-2">•</span>Share workflows with team</li>
                <li><span className="text-orange-500 mr-2">•</span>Collaborative feedback</li>
                <li><span className="text-orange-500 mr-2">•</span>Approval workflows</li>
                <li><span className="text-orange-500 mr-2">•</span>Activity history</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE - Highlighted FlowFox Column */}
      <section className="relative z-10 border-y border-slate-800 bg-slate-900/30 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <Badge className="mb-4 border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs text-orange-400">
              Comparison
            </Badge>
            <h2 className="font-[family-name:var(--font-jetbrains-mono)] text-3xl font-bold text-slate-50 md:text-4xl">
              <span className="gradient-text-orange">FlowFox</span> vs Manual Reviews
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-700 shadow-[0_0_30px_rgba(249,115,22,0.1)]">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-900">
                  <th className="px-4 py-4 text-left text-sm font-medium text-slate-400 md:px-6">Task</th>
                  <th className="px-4 py-4 text-center text-sm font-medium text-slate-500 md:px-6">Manual</th>
                  <th className="px-4 py-4 text-center text-sm font-medium text-orange-400 md:px-6 bg-[#0F172A] border-l border-orange-500/20">FlowFox</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                <tr>
                  <td className="px-4 py-4 text-sm text-slate-50 md:px-6">Review time</td>
                  <td className="px-4 py-4 text-center text-sm text-slate-500 md:px-6">30-60 min</td>
                  <td className="px-4 py-4 text-center text-sm font-medium text-orange-400 md:px-6 bg-[#0F172A] border-l border-orange-500/20">&lt; 30 sec</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-sm text-slate-50 md:px-6">Find logic errors</td>
                  <td className="px-4 py-4 text-center md:px-6">
                    <span className="inline-flex items-center gap-1 text-sm text-red-400/70">
                      <X className="h-4 w-4" /> Miss 40%
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center md:px-6 bg-[#0F172A] border-l border-orange-500/20">
                    <span className="inline-flex items-center gap-1 text-sm text-green-400">
                      <Check className="h-4 w-4" /> Catch 95%
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-sm text-slate-50 md:px-6">Suggest fixes</td>
                  <td className="px-4 py-4 text-center md:px-6">
                    <span className="inline-flex items-center gap-1 text-sm text-red-400/70">
                      <X className="h-4 w-4" /> Manual
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center md:px-6 bg-[#0F172A] border-l border-orange-500/20">
                    <span className="inline-flex items-center gap-1 text-sm text-green-400">
                      <Check className="h-4 w-4" /> Auto-generated
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-sm text-slate-50 md:px-6">Apply fixes</td>
                  <td className="px-4 py-4 text-center md:px-6">
                    <span className="inline-flex items-center gap-1 text-sm text-red-400/70">
                      <X className="h-4 w-4" /> Hours
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center md:px-6 bg-[#0F172A] border-l border-orange-500/20">
                    <span className="inline-flex items-center gap-1 text-sm text-green-400">
                      <Check className="h-4 w-4" /> One-click
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-sm text-slate-50 md:px-6">Track history</td>
                  <td className="px-4 py-4 text-center md:px-6">
                    <span className="inline-flex items-center gap-1 text-sm text-red-400/70">
                      <X className="h-4 w-4" /> None
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center md:px-6 bg-[#0F172A] border-l border-orange-500/20">
                    <span className="inline-flex items-center gap-1 text-sm text-green-400">
                      <Check className="h-4 w-4" /> Full audit
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 border-t border-slate-800 px-6 py-20 md:py-28">
        {/* Background glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="h-[300px] w-[500px] rounded-full bg-orange-500/10 blur-[100px]" />
        </div>
        <div className="mx-auto max-w-xl text-center relative z-10">
          <h2 className="font-[family-name:var(--font-jetbrains-mono)] mb-4 text-3xl font-bold text-slate-50 md:text-4xl">
            Start Reviewing Workflows <span className="gradient-text-orange">Today</span>
          </h2>
          <p className="mb-8 text-base text-slate-400">
            Join developers shipping reliable automations
          </p>

          <WaitlistForm className="max-w-md mx-auto" showToolSelect={false} />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-slate-800 px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-lg font-semibold">
            <span className="gradient-text-orange">FlowFox</span>
          </span>
          <div className="flex gap-6 text-sm text-slate-500">
            <span className="cursor-pointer transition-colors hover:text-orange-400">Privacy</span>
            <span className="cursor-pointer transition-colors hover:text-orange-400">Terms</span>
            <span className="cursor-pointer transition-colors hover:text-orange-400">Contact</span>
          </div>
          <p className="text-sm text-slate-600">© 2026 FlowFox</p>
        </div>
      </footer>
    </main>
  )
}
