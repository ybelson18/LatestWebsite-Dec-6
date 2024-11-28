"use client";
import React, { useState } from "react";
import { Container } from "./container";
import { IconCheck } from "@tabler/icons-react";
import { CustomLink } from "./custom-link";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";
import Beam from "./beam";
import { Switch } from "./switch";

export const PricingGrid = () => {
  const tiers = [
    {
      title: "Pro",
      description: "100 leads MONTHLY",
      monthlyPrice: 349,
      yearlyPrice: 279,
      yearlyTotal: 3349,
      features: [
        "AI-powered conversations",
        "Multi-channel follow-ups (Email, SMS)",
        "Lead enrichment with 300M+ B2B database",
        "Session tracking & AI scoring",
        "24/7 customer support",
        "30 Days Free",
      ],
      onClick: () => {
        console.log("clicked");
      },
      ctaText: "30 day free trial",
    },
    {
      title: "Pro+",
      description: "300 leads MONTHLY",
      monthlyPrice: 449,
      yearlyPrice: 359,
      yearlyTotal: 4299,
      features: [
        "Everything in Pro, +",
        "Social media integrations",
        "Advanced lead scoring",
        "Custom AI conversation flows",
        "Priority support",
        "Team collaboration tools",
        "30 Days Free",
      ],
      onClick: () => {
        console.log("clicked");
      },
      ctaText: "30 Days Free",
    },
    {
      title: "Mega",
      description: "600 leads MONTHLY",
      monthlyPrice: 549,
      yearlyPrice: 439,
      yearlyTotal: 5269,
      features: [
        "Everything in Pro+, +",
        "Advanced analytics dashboard",
        "Custom integration options",
        "Dedicated success manager",
        "Early access to beta features",
        "Custom reporting",
        "30 Days Free",
      ],
      featured: true,
      onClick: () => {
        console.log("clicked");
      },
      ctaText: "30 Days Free",
    },
    {
      title: "Enterprise",
      description: "Unlimited leads MONTHLY",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        "Everything in Mega, +",
        "Unlimited team members",
        "Priority access to new features",
        "Custom AI training",
        "Dedicated account management",
        "Custom SLA & support",
      ],
      onClick: () => {
        console.log("clicked");
      },
      ctaText: "Get a demo",
    },
  ];
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <div className="flex justify-center">
        <Switch checked={checked} setChecked={setChecked} />
      </div>
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4 py-20">
        {tiers.map((tier, index) => (
          <div
            key={tier.title + index}
            className={cn(
              "flex flex-col justify-between items-start px-6 py-4 rounded-lg relative overflow-hidden",
              tier.featured &&
                "bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-neutral-900 to-neutral-950"
            )}
          >
            {tier.featured && <Beam showBeam className="top-0 block" />}
            <div>
              <h3 className="text-base font-normal">{tier.title}</h3>
              {tier.title === "Enterprise" ? (
                <p className="text-lg text-neutral-400 mt-4 font-medium">Custom</p>
              ) : (
                <div className="price-container mt-4">
                  <p className="text-lg text-neutral-400 font-medium">
                    ${checked ? tier.yearlyPrice : tier.monthlyPrice} / month
                  </p>
                  {checked ? (
                    <p className="text-xs text-neutral-500 mt-1">
                      Billed annually at ${tier.yearlyTotal?.toLocaleString() ?? '0'}
                    </p>
                  ) : (
                    <div className="text-xs text-transparent mt-1">
                      Billed annually at ${tier.yearlyTotal?.toLocaleString() ?? '0'}
                    </div>
                  )}
                </div>
              )}
              <p className="text-sm text-neutral-400 mt-4">
                {tier.description}
              </p>
              <div className="mt-4">
                {tier.features.map((feature, idx) => (
                  <Step key={`feature-${index}-${idx}`}>{feature}</Step>
                ))}
              </div>
            </div>
            <Button
              variant={tier.featured ? "primary" : "muted"}
              onClick={tier.onClick}
              className="mt-4"
            >
              {tier.ctaText}
            </Button>
          </div>
        ))}
      </Container>
      {/* Removed Clients section */}
    </div>
  );
};

const Step = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-2 items-start my-4">
      <IconCheck className="h-4 w-4 text-neutral-300 mt-0.5" />
      <div className="text-sm text-neutral-400">
        <Balancer>{children}</Balancer>
      </div>
    </div>
  );
};
