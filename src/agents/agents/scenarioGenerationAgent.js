/**
 * Enhanced Scenario Generation Agent
 * 
 * This agent generates structured learning scenarios based on customer profiles
 * and skill information. It follows the 5-step progressive process (Discover, Learn,
 * Practice, Apply, Reflect) and targets specific needs (Autonomy, Competence, 
 * Relatedness, etc.).
 */

class ScenarioGenerationAgent {
  constructor() {
    this.name = 'scenarioGenerationAgent';
    this.customerClusters = {
      expatParentsNL: {
        name: 'Expat parents in the Netherlands',
        description: 'Parents raising 0-12 y/o children in the Netherlands',
        challenges: [
          'Language/cultural integration barriers',
          'Decision overload in unfamiliar systems',
          'High emotional stress (parenting, navigating school/health systems)',
          'Motivation to "fit in" socially and be seen as competent parents'
        ],
        needs: [
          'To feel confident and included in Dutch society',
          'To make smart decisions for their children (school, activities, finances)',
          'To communicate effectively with teachers, neighbors, and institutions'
        ],
        targetNeeds: ['Autonomy', 'Competence', 'Relatedness', 'Confidence', 'Mastery']
      },
      midCareerProfessionals: {
        name: 'Mid-career professionals',
        description: 'Professionals with 5-15 years experience seeking growth',
        challenges: [
          'Career plateau or stagnation',
          'Work-life balance struggles',
          'Keeping skills relevant in changing industries',
          'Managing teams or difficult workplace relationships'
        ],
        needs: [
          'To advance career prospects and earning potential',
          'To develop leadership and management capabilities',
          'To adapt to technological and industry changes',
          'To find meaning and purpose in work'
        ],
        targetNeeds: ['Autonomy', 'Mastery', 'Purpose', 'Growth', 'Recognition']
      },
      recentGraduates: {
        name: 'Recent graduates',
        description: 'Young adults transitioning from education to workforce',
        challenges: [
          'Limited practical experience',
          'Navigating job market and application processes',
          'Financial independence and management',
          'Building professional networks and relationships'
        ],
        needs: [
          'To secure meaningful employment',
          'To develop practical workplace skills',
          'To build professional confidence and identity',
          'To establish financial stability and independence'
        ],
        targetNeeds: ['Competence', 'Relatedness', 'Security', 'Identity', 'Growth']
      }
    };
    
    this.skillCategories = {
      basicCognitive: {
        name: 'Basic Cognitive Skills',
        description: 'Skills that enable individuals to communicate, perform calculations, apply reasoning and acquire new knowledge',
        examples: ['Critical thinking', 'Problem-solving', 'Numerical literacy', 'Reading comprehension']
      },
      transversal: {
        name: 'Transversal Skills',
        description: 'Soft skills crucial for adding value in an increasingly machine-intensive environment',
        examples: ['Creativity', 'Teamwork', 'Communication', 'Adaptability', 'Leadership', 'Emotional intelligence']
      },
      digitalSkills: {
        name: 'Advanced Digital Skills',
        description: 'Skills essential for the digital transition and adopting new technologies',
        examples: ['Programming', 'Data management', 'Cybersecurity', 'Digital literacy', 'AI understanding']
      },
      greenSkills: {
        name: 'Green Skills',
        description: 'Skills required for the green transition and sustainable practices',
        examples: ['Sustainable resource management', 'Environmental awareness', 'Circular economy principles']
      },
      specialist: {
        name: 'Specialist Skills',
        description: 'STEM skills crucial for mastering new technologies and their development',
        examples: ['Engineering', 'Scientific research', 'Technical specializations', 'Advanced manufacturing']
      },
      managerial: {
        name: 'Managerial Skills',
        description: 'Skills essential for adoption of technologies and optimal allocation of human capital',
        examples: ['Strategic planning', 'Team management', 'Resource allocation', 'Change management']
      }
    };
  }

  /**
   * Initialize the agent
   */
  init() {
    console.log('Scenario Generation Agent initialized');
    return true;
  }

  /**
   * Generate scenarios based on customer cluster and skill information
   * 
   * @param {Object} params - Parameters for scenario generation
   * @param {string} params.customerClusterId - ID of the customer cluster
   * @param {Object} params.skillInfo - Information about the skill
   * @returns {Array} - Array of generated scenarios
   */
  generateScenarios(params) {
    const { customerClusterId, skillInfo } = params;
    const customerCluster = this.customerClusters[customerClusterId];
    
    if (!customerCluster) {
      return {
        error: `Customer cluster '${customerClusterId}' not found`
      };
    }

    // Generate 1-3 scenarios based on the customer cluster and skill
    const scenarios = [];
    const numScenarios = Math.floor(Math.random() * 3) + 1; // 1 to 3 scenarios
    
    for (let i = 0; i < numScenarios; i++) {
      scenarios.push(this.createScenario(customerCluster, skillInfo));
    }
    
    // Sort scenarios by relevance score (highest first)
    scenarios.sort((a, b) => b.relevanceScore - a.relevanceScore);
    
    return {
      customerCluster,
      skillInfo,
      scenarios
    };
  }

  /**
   * Create a single scenario based on customer cluster and skill information
   * 
   * @param {Object} customerCluster - Customer cluster information
   * @param {Object} skillInfo - Information about the skill
   * @returns {Object} - Generated scenario
   */
  createScenario(customerCluster, skillInfo) {
    // Generate a scenario title based on the skill and customer cluster
    const scenarioTitles = this.generateScenarioTitles(customerCluster, skillInfo);
    const selectedTitle = scenarioTitles[Math.floor(Math.random() * scenarioTitles.length)];
    
    // Generate a use case description
    const useCase = this.generateUseCase(customerCluster, skillInfo);
    
    // Calculate relevance score (0-100)
    const relevanceScore = this.calculateRelevanceScore(customerCluster, skillInfo);
    
    // Generate the 5-step progressive process
    const progressiveSteps = this.generateProgressiveSteps(customerCluster, skillInfo);
    
    return {
      title: selectedTitle,
      useCase,
      relevanceScore,
      progressiveSteps
    };
  }

  /**
   * Generate potential scenario titles based on customer cluster and skill
   * 
   * @param {Object} customerCluster - Customer cluster information
   * @param {Object} skillInfo - Information about the skill
   * @returns {Array} - Array of potential scenario titles
   */
  generateScenarioTitles(customerCluster, skillInfo) {
    const titles = [];
    
    // Generate titles based on skill category
    if (skillInfo.category === 'basicCognitive') {
      if (customerCluster.name.includes('parent')) {
        titles.push(
          'Making Sense of School Tasks (And Explaining Them Simply)',
          'Navigating Parent-Teacher Meetings with Confidence',
          'Understanding School Reports and Progress Indicators'
        );
      } else if (customerCluster.name.includes('professional')) {
        titles.push(
          'Breaking Down Complex Workplace Problems',
          'Analyzing Industry Reports for Strategic Insights',
          'Communicating Technical Concepts to Non-Technical Teams'
        );
      } else {
        titles.push(
          'Decoding Job Descriptions and Requirements',
          'Understanding Workplace Expectations and Culture',
          'Making Sense of Financial Documents and Contracts'
        );
      }
    } else if (skillInfo.category === 'transversal') {
      if (customerCluster.name.includes('parent')) {
        titles.push(
          'Talking About School Without Power Struggles',
          'Building Relationships with Other Parents and Teachers',
          'Managing Emotions During Challenging School Situations'
        );
      } else if (customerCluster.name.includes('professional')) {
        titles.push(
          'Leading Teams Through Organizational Change',
          'Navigating Difficult Workplace Conversations',
          'Building Cross-Departmental Relationships and Influence'
        );
      } else {
        titles.push(
          'Making a Strong First Impression in Professional Settings',
          'Building Your Professional Network from Scratch',
          'Communicating Confidently in Job Interviews'
        );
      }
    } else {
      // Generic titles for other skill categories
      titles.push(
        `Applying ${skillInfo.title} in Real-World Situations`,
        `Solving Problems with ${skillInfo.title}`,
        `Building Confidence in Your ${skillInfo.title} Abilities`
      );
    }
    
    return titles;
  }

  /**
   * Generate a use case description for the scenario
   * 
   * @param {Object} customerCluster - Customer cluster information
   * @param {Object} skillInfo - Information about the skill
   * @returns {string} - Use case description
   */
  generateUseCase(customerCluster, skillInfo) {
    // Select a random challenge and need from the customer cluster
    const challenge = customerCluster.challenges[Math.floor(Math.random() * customerCluster.challenges.length)];
    const need = customerCluster.needs[Math.floor(Math.random() * customerCluster.needs.length)];
    
    // Generate use case based on skill category
    if (skillInfo.category === 'basicCognitive') {
      return `Improve your ability to break down complex information, so you can ${need.toLowerCase()} despite ${challenge.toLowerCase()}.`;
    } else if (skillInfo.category === 'transversal') {
      return `Learn how to communicate effectively and build relationships, helping you ${need.toLowerCase()} while overcoming ${challenge.toLowerCase()}.`;
    } else if (skillInfo.category === 'digitalSkills') {
      return `Master digital tools and platforms that will help you ${need.toLowerCase()}, even when facing ${challenge.toLowerCase()}.`;
    } else if (skillInfo.category === 'managerial') {
      return `Develop leadership and management capabilities that enable you to ${need.toLowerCase()}, creating solutions for ${challenge.toLowerCase()}.`;
    } else {
      return `Build expertise in ${skillInfo.title} to help you ${need.toLowerCase()}, addressing challenges like ${challenge.toLowerCase()}.`;
    }
  }

  /**
   * Calculate relevance score for the scenario
   * 
   * @param {Object} customerCluster - Customer cluster information
   * @param {Object} skillInfo - Information about the skill
   * @returns {number} - Relevance score (0-100)
   */
  calculateRelevanceScore(customerCluster, skillInfo) {
    // Base score
    let score = 70;
    
    // Adjust based on skill category relevance to customer cluster
    if (customerCluster.name.includes('parent')) {
      if (['basicCognitive', 'transversal'].includes(skillInfo.category)) {
        score += 15;
      } else if (['digitalSkills', 'greenSkills'].includes(skillInfo.category)) {
        score += 5;
      }
    } else if (customerCluster.name.includes('professional')) {
      if (['managerial', 'specialist', 'digitalSkills'].includes(skillInfo.category)) {
        score += 15;
      } else if (['transversal'].includes(skillInfo.category)) {
        score += 10;
      }
    } else if (customerCluster.name.includes('graduate')) {
      if (['basicCognitive', 'transversal', 'digitalSkills'].includes(skillInfo.category)) {
        score += 15;
      } else if (['specialist'].includes(skillInfo.category)) {
        score += 10;
      }
    }
    
    // Add some randomness (±5 points)
    score += Math.floor(Math.random() * 11) - 5;
    
    // Ensure score is within 0-100 range
    return Math.max(0, Math.min(100, score));
  }

  /**
   * Generate the 5-step progressive process for the scenario
   * 
   * @param {Object} customerCluster - Customer cluster information
   * @param {Object} skillInfo - Information about the skill
   * @returns {Object} - Progressive steps for the scenario
   */
  generateProgressiveSteps(customerCluster, skillInfo) {
    const targetNeeds = customerCluster.targetNeeds;
    
    return {
      discover: {
        format: 'Self-guided',
        description: this.generateDiscoverStep(customerCluster, skillInfo),
        targetNeeds: [
          targetNeeds[Math.floor(Math.random() * targetNeeds.length)],
          targetNeeds[Math.floor(Math.random() * targetNeeds.length)]
        ]
      },
      learn: {
        format: 'Self-guided',
        description: this.generateLearnStep(customerCluster, skillInfo),
        targetNeeds: [
          targetNeeds[Math.floor(Math.random() * targetNeeds.length)],
          targetNeeds[Math.floor(Math.random() * targetNeeds.length)]
        ]
      },
      practice: {
        format: 'Simulation + Peer Challenge',
        description: this.generatePracticeStep(customerCluster, skillInfo),
        targetNeeds: [
          targetNeeds[Math.floor(Math.random() * targetNeeds.length)],
          targetNeeds[Math.floor(Math.random() * targetNeeds.length)]
        ]
      },
      apply: {
        format: 'Real-world task',
        description: this.generateApplyStep(customerCluster, skillInfo),
        targetNeeds: [
          targetNeeds[Math.floor(Math.random() * targetNeeds.length)],
          targetNeeds[Math.floor(Math.random() * targetNeeds.length)],
          targetNeeds[Math.floor(Math.random() * targetNeeds.length)]
        ]
      },
      reflect: {
        format: 'Peer Coaching or Group Session',
        description: this.generateReflectStep(customerCluster, skillInfo),
        targetNeeds: [
          targetNeeds[Math.floor(Math.random() * targetNeeds.length)],
          targetNeeds[Math.floor(Math.random() * targetNeeds.length)],
          targetNeeds[Math.floor(Math.random() * targetNeeds.length)]
        ]
      }
    };
  }

  /**
   * Generate the Discover step description
   */
  generateDiscoverStep(customerCluster, skillInfo) {
    if (customerCluster.name.includes('parent')) {
      if (skillInfo.category === 'basicCognitive') {
        return 'Understand how reasoning and information processing shape your child\'s experience in school. Watch a story or reflection from an expat parent navigating the Dutch school system.';
      } else if (skillInfo.category === 'transversal') {
        return 'Explore how communication styles and emotional intelligence impact parent-teacher relationships. View examples of successful and challenging interactions in school settings.';
      } else {
        return `Discover how ${skillInfo.title} can help you navigate parenting challenges in a new cultural context. Learn from the experiences of other expat parents.`;
      }
    } else if (customerCluster.name.includes('professional')) {
      if (skillInfo.category === 'managerial') {
        return 'Understand how leadership approaches and management styles impact team performance and workplace culture. Explore case studies of effective leadership in changing organizations.';
      } else {
        return `Discover how ${skillInfo.title} can enhance your professional effectiveness and career growth. Examine real-world examples of professionals applying these skills.`;
      }
    } else {
      return `Explore the importance of ${skillInfo.title} in today's workplace and how it can help you overcome common challenges faced by recent graduates. Learn from the experiences of others who have successfully navigated this transition.`;

(Content truncated due to size limit. Use line ranges to read in chunks)
