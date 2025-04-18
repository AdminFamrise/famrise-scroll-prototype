// src/pages/admin/AddSkill.js
import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

/* ------------------------------------------------------------------ */
/*  Helper utilities                                                  */
/* ------------------------------------------------------------------ */
const addItem = (state, setState, key, template) =>
  setState({ ...state, [key]: [...state[key], template] });

const updateArray = (state, setState, key, idx, field, val) => {
  const copy = [...state[key]];
  copy[idx][field] = val;
  setState({ ...state, [key]: copy });
};

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */
const AddSkill = () => {
  const [skill, setSkill] = useState({
    // ---------- 1) Skill Info ----------
    slug: "",
    title: "",
    category: "Growth Skills",
    realLifeScenario: "",
    tagline: "",
    overview: "",
    thumbnail: "",

    // ---------- 2) Discover ------------
    discover: {
      exampleScenario: "",
      format: "Animated slides",
      recognitionPoints: [""],
      starterConcepts: [{ term: "", definition: "" }],
      outcome: ""
    },

    // ---------- 3) Learn ---------------
    learn: {
      slides: [""],
      readings: [{ title: "", description: "", link: "" }],
      videos: [{ title: "", description: "", youtube: "" }],
      selfCheck: [""]
    },

    // ---------- 4) Practice ------------
    practice: {
      scenarioPrompt: "",
      questionType: "open-ended",
      peerFeedback: false
    },

    // ---------- 5) Apply ---------------
    apply: {
      challengePrompt: "",
      exampleSteps: [""],
      recommendedExperience: ""
    },

    // ---------- 6) Reflect -------------
    reflect: {
      prompts: [""],
      connectOptions: [""]
    },

    // ---------- 7) Bridge --------------
    bridge: {
      description: "",
      suggestedSkills: [""]
    }
  });

  /* -------------------- generic change handler ------------------- */
  const setRoot = (e) =>
    setSkill({ ...skill, [e.target.name]: e.target.value });

  /* ------------------------------- Save -------------------------- */
  const handleSave = () => {
    const fileName = `${skill.slug}.json`;
    const blob = new Blob([JSON.stringify(skill, null, 2)], {
      type: "application/json"
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = fileName;
    a.click();
  };

  /* ------------------------------------------------------------------ */
  /*  Mark‑up                                                           */
  /* ------------------------------------------------------------------ */
  return (
    <Card className="p-6 max-w-5xl mx-auto space-y-10">
      <CardContent>
        <h1 className="text-2xl font-bold mb-6">🛠️ Add New Skill</h1>

        {/* 1️⃣ SKILL INFO ------------------------------------------------ */}
        <section className="border-l-4 border-blue-500 pl-4 mb-8">
          <h2 className="text-lg font-semibold mb-3">1️⃣ Skill Info</h2>

          <Input name="slug" placeholder="slug (e.g. ai-literacy)"
                 value={skill.slug} onChange={setRoot} className="mb-2" />

          <Input name="title" placeholder="Skill Title"
                 value={skill.title} onChange={setRoot} className="mb-2" />

          <Input name="category" placeholder="Category"
                 value={skill.category} onChange={setRoot} className="mb-2" />

          <Input name="realLifeScenario" placeholder="Real‑Life Scenario"
                 value={skill.realLifeScenario} onChange={setRoot} className="mb-2" />

          <Input name="tagline" placeholder="Tagline"
                 value={skill.tagline} onChange={setRoot} className="mb-2" />

          <textarea
            name="overview"
            rows={3}
            value={skill.overview}
            onChange={setRoot}
            placeholder="Intro / Overview"
            className="w-full border rounded p-3 mb-2 text-sm"
          />

          <Input name="thumbnail" placeholder="Thumbnail URL"
                 value={skill.thumbnail} onChange={setRoot} />
        </section>

        {/* 2️⃣ DISCOVER --------------------------------------------------- */}
        <section className="border-l-4 border-green-500 pl-4 mb-8 space-y-4">
          <h2 className="text-lg font-semibold">2️⃣ Discover</h2>

          <Input placeholder="Example Scenario"
                 value={skill.discover.exampleScenario}
                 onChange={(e)=>setSkill({...skill,discover:{...skill.discover,exampleScenario:e.target.value}})}
          />

          <Input placeholder="Format"
                 value={skill.discover.format}
                 onChange={(e)=>setSkill({...skill,discover:{...skill.discover,format:e.target.value}})}
          />

          <h3 className="font-semibold">Recognition Points</h3>
          {skill.discover.recognitionPoints.map((pt,i)=>(
            <Input key={i} placeholder={`Point ${i+1}`}
                 value={pt}
                 onChange={(e)=>{
                   const arr=[...skill.discover.recognitionPoints];
                   arr[i]=e.target.value;
                   setSkill({...skill,discover:{...skill.discover,recognitionPoints:arr}});
                 }} className="mb-1"/>
          ))}
          <Button variant="outline"
                  onClick={()=>addItem(skill,setSkill,"discover",{
                    ...skill.discover,
                    recognitionPoints:[...skill.discover.recognitionPoints,""]
                  })}>
            Add Point
          </Button>

          <h3 className="font-semibold mt-4">Starter Concepts</h3>
          {skill.discover.starterConcepts.map((sc,i)=>(
            <div key={i} className="flex gap-2 mb-1">
              <Input placeholder="Term" value={sc.term}
                onChange={(e)=>updateArray(skill,setSkill,"discover",i,"term",e.target.value)}/>
              <Input placeholder="Definition" value={sc.definition}
                onChange={(e)=>updateArray(skill,setSkill,"discover",i,"definition",e.target.value)}/>
            </div>
          ))}
          <Button variant="outline"
            onClick={()=>setSkill({
                ...skill,
                discover:{...skill.discover,
                  starterConcepts:[...skill.discover.starterConcepts,{term:"",definition:""}]}
            })}>
            Add Concept
          </Button>

          <textarea rows={2} className="w-full border rounded p-2 text-sm mt-3"
            placeholder="Module Outcome"
            value={skill.discover.outcome}
            onChange={(e)=>setSkill({...skill,discover:{...skill.discover,outcome:e.target.value}})}
          />
        </section>

        {/* 3️⃣ LEARN ------------------------------------------------------ */}
        <section className="border-l-4 border-yellow-500 pl-4 mb-8 space-y-4">
          <h2 className="text-lg font-semibold">3️⃣ Learn</h2>

          {/* Slides */}
          <h3 className="font-semibold">Slides</h3>
          {skill.learn.slides.map((s,i)=>(
            <textarea key={i} rows={2} className="w-full border rounded p-2 mb-1 text-sm"
              placeholder={`Slide ${i+1} content`}
              value={s}
              onChange={(e)=>{
                const copy=[...skill.learn.slides]; copy[i]=e.target.value;
                setSkill({...skill,learn:{...skill.learn,slides:copy}});
              }}/>
          ))}
          <Button variant="outline"
            onClick={()=>setSkill({...skill,learn:{...skill.learn,slides:[...skill.learn.slides,""]}})}>
            Add Slide
          </Button>

          {/* Readings */}
          <h3 className="font-semibold mt-4">Readings / Articles</h3>
          {skill.learn.readings.map((r,i)=>(
            <div key={i} className="mb-2">
              <Input placeholder="Title" value={r.title}
                onChange={(e)=>updateArray(skill,setSkill,"learn",i,"title",e.target.value)}/>
              <Input placeholder="Description" value={r.description}
                onChange={(e)=>updateArray(skill,setSkill,"learn",i,"description",e.target.value)} className="mt-1"/>
              <Input placeholder="Link" value={r.link}
                onChange={(e)=>updateArray(skill,setSkill,"learn",i,"link",e.target.value)} className="mt-1"/>
            </div>
          ))}
          <Button variant="outline"
            onClick={()=>addItem(skill,setSkill,"learn",{...skill.learn, readings:[...skill.learn.readings,{title:"",description:"",link:""}]})}>
            Add Reading
          </Button>

          {/* Videos */}
          <h3 className="font-semibold mt-4">Videos</h3>
          {skill.learn.videos.map((v,i)=>(
            <div key={i} className="mb-2">
              <Input placeholder="Title" value={v.title}
                onChange={(e)=>updateArray(skill,setSkill,"learn",i,"title",e.target.value)}/>
              <Input placeholder="Description" value={v.description}
                onChange={(e)=>updateArray(skill,setSkill,"learn",i,"description",e.target.value)} className="mt-1"/>
              <Input placeholder="YouTube URL" value={v.youtube}
                onChange={(e)=>updateArray(skill,setSkill,"learn",i,"youtube",e.target.value)} className="mt-1"/>
            </div>
          ))}
          <Button variant="outline"
            onClick={()=>addItem(skill,setSkill,"learn",{...skill.learn,videos:[...skill.learn.videos,{title:"",description:"",youtube:""}]})}>
            Add Video
          </Button>

          {/* Self‑check */}
          <h3 className="font-semibold mt-4">Self‑Check Prompts</h3>
          {skill.learn.selfCheck.map((q,i)=>(
            <Input key={i} placeholder={`Prompt ${i+1}`} value={q}
              onChange={(e)=>{
                const arr=[...skill.learn.selfCheck]; arr[i]=e.target.value;
                setSkill({...skill,learn:{...skill.learn,selfCheck:arr}});
              }} className="mb-1"/>
          ))}
          <Button variant="outline"
            onClick={()=>setSkill({...skill,learn:{...skill.learn,selfCheck:[...skill.learn.selfCheck,""]}})}>
            Add Prompt
          </Button>
        </section>

        {/* 4️⃣ PRACTICE --------------------------------------------------- */}
        <section className="border-l-4 border-purple-500 pl-4 mb-8 space-y-2">
          <h2 className="text-lg font-semibold">4️⃣ Practice</h2>
          <textarea rows={3} className="w-full border rounded p-2 text-sm"
            placeholder="Scenario Prompt"
            value={skill.practice.scenarioPrompt}
            onChange={(e)=>setSkill({...skill,practice:{...skill.practice,scenarioPrompt:e.target.value}})}
          />
          <Input placeholder="Question Type (open-ended / multiple-choice)"
            value={skill.practice.questionType}
            onChange={(e)=>setSkill({...skill,practice:{...skill.practice,questionType:e.target.value}})}
          />
          <label className="inline-flex items-center gap-2 text-sm mt-2">
            <input type="checkbox" checked={skill.practice.peerFeedback}
              onChange={(e)=>setSkill({...skill,practice:{...skill.practice,peerFeedback:e.target.checked}})}
            />
            Allow peer feedback
          </label>
        </section>

        {/* 5️⃣ APPLY ------------------------------------------------------ */}
        <section className="border-l-4 border-amber-600 pl-4 mb-8 space-y-2">
          <h2 className="text-lg font-semibold">5️⃣ Apply</h2>
          <textarea rows={3} className="w-full border rounded p-2 text-sm"
            placeholder="Real‑World Challenge Prompt"
            value={skill.apply.challengePrompt}
            onChange={(e)=>setSkill({...skill,apply:{...skill.apply,challengePrompt:e.target.value}})}
          />
          <h4 className="font-semibold mt-2">Example Steps</h4>
          {skill.apply.exampleSteps.map((st,i)=>(
            <Input key={i} placeholder={`Step ${i+1}`} value={st}
              onChange={(e)=>{
                const arr=[...skill.apply.exampleSteps]; arr[i]=e.target.value;
                setSkill({...skill,apply:{...skill.apply,exampleSteps:arr}});
              }} className="mb-1"/>
          ))}
          <Button variant="outline"
            onClick={()=>setSkill({...skill,apply:{...skill.apply,exampleSteps:[...skill.apply.exampleSteps,\"\"]}})}>
            Add Step
          </Button>
          <Input placeholder="Recommended Experience"
            value={skill.apply.recommendedExperience}
            onChange={(e)=>setSkill({...skill,apply:{...skill.apply,recommendedExperience:e.target.value}})} className="mt-2"/>
        </section>

        {/* 6️⃣ REFLECT ---------------------------------------------------- */}
        <section className="border-l-4 border-teal-600 pl-4 mb-8 space-y-2">
          <h2 className="text-lg font-semibold">6️⃣ Reflect</h2>
          {skill.reflect.prompts.map((p,i)=>(
            <Input key={i} placeholder={`Prompt ${i+1}`} value={p}
              onChange={(e)=>{
                const arr=[...skill.reflect.prompts]; arr[i]=e.target.value;
                setSkill({...skill,reflect:{...skill.reflect,prompts:arr}});
              }} className="mb-1"/>
          ))}
          <Button variant="outline"
            onClick={()=>setSkill({...skill,reflect:{...skill.reflect,prompts:[...skill.reflect.prompts,\"\"]}})}>
            Add Prompt
          </Button>

          <h4 className="font-semibold mt-3">Connect Options</h4>
          {skill.reflect.connectOptions.map((o,i)=>(
            <Input key={i} placeholder={`Option ${i+1}`} value={o}
              onChange={(e)=>{
                const arr=[...skill.reflect.connectOptions]; arr[i]=e.target.value;
                setSkill({...skill,reflect:{...skill.reflect,connectOptions:arr}});
              }} className="mb-1"/>
          ))}
          <Button variant="outline"
            onClick={()=>setSkill({...skill,reflect:{...skill.reflect,connectOptions:[...skill.reflect.connectOptions,\"\"]}})}>
            Add Option
          </Button>
        </section>

        {/* 7️⃣ BRIDGE ----------------------------------------------------- */}
        <section className="border-l-4 border-gray-500 pl-4 mb-8 space-y-2">
          <h2 className="text-lg font-semibold">7️⃣ Bridge</h2>
          <textarea rows={3} className="w-full border rounded p-2 text-sm"
            placeholder="Bridge Description"
            value={skill.bridge.description}
            onChange={(e)=>setSkill({...skill,bridge:{...skill.bridge,description:e.target.value}})}
          />
          <h4 className="font-semibold mt-2">Suggested Skills</h4>
          {skill.bridge.suggestedSkills.map((s,i)=>(
            <Input key={i} placeholder="skill-slug" value={s}
              onChange={(e)=>{
                const arr=[...skill.bridge.suggestedSkills]; arr[i]=e.target.value;
                setSkill({...skill,bridge:{...skill.bridge,suggestedSkills:arr}});
              }} className="mb-1"/>
          ))}
          <Button variant="outline"
            onClick={()=>setSkill({...skill,bridge:{...skill.bridge,suggestedSkills:[...skill.bridge.suggestedSkills,\"\"]}})}>
            Add Suggested Skill
          </Button>
        </section>

        {/* SAVE ----------------------------------------------------------- */}
        <div className="text-center">
          <Button onClick={handleSave}>💾 Save Skill File</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AddSkill;

