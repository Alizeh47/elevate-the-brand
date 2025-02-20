# Custom Cursor Rules (.cursorrules) Document for BrandElevate

## Overview:

This document defines the custom integration and operational rules for the Cursor IDE in the BrandElevate project. It consolidates guidelines, best practices, and systematic instructions for developers using Cursor IDE. The document is intended to streamline development, enforce code standardization, and ensure a consistent IDE experience across the team.

1.  Integration with Cursor IDE

*   All project files, components, and modules should be compatible with Cursor IDE's real-time suggestions and IntelliSense features.
*   Enable AI-powered debugging and code analysis using Cursor’s integrations (e.g., with the Claude 3.5 Sonnet and GPT-4o models for intelligent code assistance).
*   Real-time collaboration features in Cursor should be leveraged during pair programming sessions to maximize efficiency.

1.  Code Structure & Conventions

*   Follow the architectural guidelines as defined in the PRD and subsequent technical documents (e.g., frontend, backend, file structure).
*   Use TypeScript across all code files to ensure type safety, with standard ESLint and Prettier rules integrated in Cursor.
*   Modularize code for reusability (e.g., separate components for content editor, dashboard, analytics widgets, and media management).
*   Maintain clear separation of concerns between the UI (Next.js, Tailwind CSS, shadcn/UI) and the business logic (Supabase integrations, API endpoints).

1.  Development Workflow

*   Begin each feature or bug fix with the appropriate branch using Git integration in Cursor.
*   Follow the dedicated PR checks and use inline comments and code reviews within the Cursor interface to ensure adherence to coding standards.
*   Use real-time collaboration tools to facilitate on-the-fly discussions and feedback loops during the content creation cycles.
*   Leverage Cursor’s debug tools integrated with Vercel for rapid iteration and testing.

1.  IDE Configuration & Customizations

*   Set up Cursor with the project’s TypeScript, Tailwind CSS, and shadcn/UI configuration for seamless autocompletion and code generation.
*   Employ custom workspace settings reflecting the project’s modern, minimalistic theme to improve readability (e.g., preferred fonts, color schemes, and navigation shortcuts).
*   Incorporate custom snippets/templates for frequently used code structures (e.g., API routing patterns, component scaffolding, and test cases) within Cursor.

1.  AI-Assisted Enhancements

*   Utilize Claude 3.5 Sonnet and GPT-4o for intelligent code suggestions, ensuring that each code block is optimized for performance and readability.
*   Automate repetitive tasks within the editor by defining macros or code actions in Cursor’s settings.
*   Integrate error detection and automated refactoring tools as recommended by the AI models to maintain codebase quality.

1.  Continuous Deployment & Testing

*   Use GitHub Actions integration with Cursor to ensure that all changes meet CI/CD pipeline requirements (including unit tests, linting, and integration tests) before deployment.
*   Monitor real-time feedback from Vercel’s deployment logs available directly through the Cursor interface.
*   Follow the established rollback protocols and logging mechanisms to track and address any deployment issues promptly.

1.  Documentation & IDE Support

*   Ensure that every module, component, and function is comprehensively documented inline and synchronized with the project’s overall PRD and technical documents.
*   Utilize Cursor’s built-in documentation features to generate and update code documentation automatically, ensuring consistency across the codebase.
*   Any changes or updates to IDE integration rules must be communicated promptly to the team and documented within this .cursorrules file.

1.  Security and Compliance

*   Adhere to security guidelines outlined in the PRD, including encryption of sensitive data and secure handling of user authentication details.
*   Use Cursor’s security auditing features and consistent logging to monitor potential vulnerabilities.
*   Maintain GDPR and general data protection best practices as integrated in the authentication (Supabase) and state management systems.

## Conclusion:

This .cursorrules document is critical for ensuring that the BrandElevate project maintains a high level of code quality, efficient workflow, and robust integration with modern IDE tools. It is expected that all development team members adhere strictly to these guidelines, thereby guaranteeing consistency, maintainability, and scalability throughout the project lifecycle.

End of Document.
