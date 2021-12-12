import React from "react";
import mockup from "./mockup.png";
import Image from "next/image";
export default function VisspotInitial() {
  return (
    <div className="mx-auto max-w-3xl flex flex-col gap-4 px-3 py-5">
      <h1 className="my-3 heading">
        Building VisSpot: Platform for Automating Continuous Research Pipelines
      </h1>
      <div className="flex gap-4 flex-col">
        <h2 className="heading-2">The problem with traditional experimental research</h2>
        <p>
          UX experimental research methods usually involve
          intensive data collection, data processing, data analysis (including
          hypothesis testing using various statistical methods), and data
          visualisation (including putting charts into presentation slides).
          These tasks are often performed manually, and are difficult to be
          reproduced the same way everytime. They are also usually performed
          only once or twice as they can be quite expensive and time-consuming. This
          usually leads to missing potential insights.
        </p>
        <div className="pl-6 flex flex-col gap-3 border-l border-black dark:border-white ml-2">
          <p>
            <b>Scenario:</b> We’ve just created a new Christmas themed button on our web page.
            And we expect people to click it more than the old button.
          </p>
          <p>
            <b>Testing:</b> A/B testing
          </p>
          <p>
            <b>We need:</b> users randomly split into 2 groups. Users in the
            first group will be presented with a version of our web page that
            has the new button, and the other group will only see the old
            button.
          </p>
          <p>
            <b>Traditional way to approach this:</b> We collect usage data from the
            two groups, clean the data, and perform a statistical analysis. We
            may also have to come up with a few data visualisations to present
            the research result to our stakeholders, or just to understand our
            result better.
          </p>
          <p>
            Let’s say we find that there is a significant difference between the
            users from the two groups. We create a PowerPoint presentation and
            present it to our stakeholders.
          </p>
          <p>Then we forget about it.</p>
          <p>Do you see any problems with this approach?</p>
          <p>
            What If our new button only appeals to our users during Christmas
            time, which is when we conducted our research, but has a negative
            effect in the Summer? How can we make sure that this insight is not
            lost?
          </p>
        </div>
        <h2 className="heading-2">
          This is one of the problems VisSpot could solve
        </h2>
        <p>
          By automating <b>continuous research pipelines</b>, making conducting
          research easier, more efficient, and truely repeatable 🥳
        </p>
        <p className="text-yellow-600 px-5 border-l border-yellow-400">Reruning an experiment should not require more than a button click.</p>
        <h3 className="text-xl">What's a research pipeline?</h3>
        <p>
          A research pipeline consists of multiple <b>steps</b>. In the mock-up
          below, steps are represented as columns, and they can contain multiple{" "}
          <b>tasks</b> that can be linked together. For example, a data collection step contains tasks that generate web forms for
          data entry, a data processing step contains various
          software agents that will clean, process, and perform hypothesis
          testing for us, and a data visualisation step contains data
          visualisers can automatically create any charts we need.
        </p>
        <div className="relative w-full h-96">
          <Image src={mockup.src} layout={"fill"} objectFit={"contain"} />
        </div>
        <p>
          To put it simply, VisSpot allows users to create a way to continuously collect
          data and pipe it into a series of data processing tasks, and a series
          of visualisation tasks. The results could be saved into any storage of
          choice (Google Drive, OneDrive, local file system, etc.)
        </p>
        <h2 className="heading-2">Set up once and run multiple times</h2>
        <p>
          VisSpot's research pipelines can be set up once and run multiple times.
          That’s why we call them <b>continuous</b> research pipelines. You can
          schedule it to run based on any conditions you want. For example, you
          can ask your pipeline to run every Tuesday at 9AM, or every time we
          have 100 rows of data entered.
        </p>
        <h2 className="heading-2">Just an idea.</h2>
        <p>
          Currently, VisSpot is just an idea. The next step is to build a
          proof-of-concept. I will write down every step in my journey and post
          it here. Stay tuned!
        </p>
      </div>
    </div>
  );
}
