# Requirements Document

## Introduction

This feature establishes a professional development workflow for the MenteMX website project (mentemx.com.br) by implementing GitHub Projects Kanban board for task management and GitHub Actions CI/CD pipelines for automated deployment, linting, and quality checks. The goal is to transform the development process from manual to dynamic and automated, enabling better task visibility, code quality enforcement, and reliable deployments to GitHub Pages.

## Glossary

- **CI_Pipeline**: The GitHub Actions continuous integration workflow that runs automated checks (linting, validation) on code changes before they are merged.
- **CD_Pipeline**: The GitHub Actions continuous deployment workflow that automatically deploys the static website to GitHub Pages when changes are merged to the main branch.
- **Kanban_Board**: A GitHub Projects board with columns representing task stages (Backlog, To Do, In Progress, Review, Done) used to visualize and manage development work.
- **Workflow_File**: A YAML configuration file stored in `.github/workflows/` that defines a GitHub Actions automation pipeline.
- **Pull_Request**: A GitHub mechanism for proposing code changes that triggers CI checks before merging into the main branch.
- **Linter**: A static analysis tool that checks HTML, CSS, and JavaScript files for syntax errors, style violations, and potential issues.
- **GitHub_Pages**: The hosting service that serves the MenteMX static website from the repository's main branch.

## Requirements

### Requirement 1: GitHub Projects Kanban Board Configuration

**User Story:** As a developer, I want a GitHub Projects Kanban board configured for the MenteMX repository, so that I can visualize, prioritize, and track all development tasks in a structured workflow.

#### Acceptance Criteria

1. THE Kanban_Board SHALL contain the following columns in order: Backlog, To Do, In Progress, Review, Done.
2. WHEN a new issue is created in the repository, THE Kanban_Board SHALL place the issue in the Backlog column by default.
3. THE Kanban_Board SHALL include labels for categorizing tasks: `enhancement`, `bug`, `design`, `content`, `ci-cd`, and `documentation`.
4. THE Kanban_Board SHALL allow manual movement of any issue between columns via drag-and-drop or column field update.
5. THE Kanban_Board SHALL include issue templates for bug reports and feature requests with predefined fields (title, description, acceptance criteria, priority) where priority values are: `low`, `medium`, `high`, `critical`.
6. WHEN an issue is moved to the Done column on the Kanban_Board, THE issue SHALL be automatically closed.

### Requirement 2: CI Pipeline for Code Quality

**User Story:** As a developer, I want an automated CI pipeline that validates code quality on every push and pull request, so that I can catch errors before they reach production.

#### Acceptance Criteria

1. WHEN a push is made to any branch, THE CI_Pipeline SHALL run HTML validation on all `.html` files in the repository root directory.
2. WHEN a push is made to any branch, THE CI_Pipeline SHALL run CSS linting on all `.css` files in the `styles/` and `css/` directories, excluding third-party files (bootstrap.css, bootstrap.min.css, animate.css, owl.carousel.css, owl.theme.css, font-awesome.css, font-awesome.min.css).
3. WHEN a push is made to any branch, THE CI_Pipeline SHALL run JavaScript linting on all `.js` files in the `scripts/` directory.
4. WHEN a Pull_Request is opened or updated with new commits targeting the main branch, THE CI_Pipeline SHALL run all linting checks and report results as a status check.
5. IF any Linter check fails, THEN THE CI_Pipeline SHALL report the failure with specific file names and line numbers in the Pull_Request status.
6. WHEN all CI checks pass on a Pull_Request, THE CI_Pipeline SHALL mark the Pull_Request status as successful.
7. IF the CI_Pipeline does not complete within 10 minutes, THEN THE CI_Pipeline SHALL terminate the run and report a timeout failure.

### Requirement 3: CD Pipeline for GitHub Pages Deployment

**User Story:** As a developer, I want an automated deployment pipeline that publishes the website to GitHub Pages when code is merged to main, so that the live site stays up to date without manual intervention.

#### Acceptance Criteria

1. WHEN a push is made to the main branch, THE CD_Pipeline SHALL deploy the entire repository root content (including HTML, CSS, JavaScript, image, and font files) to GitHub_Pages.
2. THE CD_Pipeline SHALL preserve the existing CNAME file (mentemx.com.br) in the deployed output so that the custom domain configuration remains active.
3. WHEN the deployment completes successfully, THE CD_Pipeline SHALL report the deployment status as successful in the GitHub Actions log, including the deployed URL.
4. IF the deployment fails, THEN THE CD_Pipeline SHALL report the failure reason in the GitHub Actions log and ensure no partial content is published by using atomic deployment (the previous live version remains unchanged until the new deployment fully succeeds).
5. THE CD_Pipeline SHALL deploy only after the CI_Pipeline job passes successfully on the same workflow run, enforced via a job dependency (the deployment job requires the CI job to complete with success status).
6. IF the CD_Pipeline deployment does not complete within 10 minutes, THEN THE CD_Pipeline SHALL terminate the deployment job and report a timeout failure in the GitHub Actions log.

### Requirement 4: Branch Protection Rules

**User Story:** As a project maintainer, I want branch protection rules on the main branch, so that code quality is enforced before any changes reach production.

#### Acceptance Criteria

1. THE main branch SHALL require at least 1 approving Pull_Request review before merging, and SHALL dismiss stale approvals when new commits are pushed to the Pull_Request branch.
2. THE main branch SHALL require all CI_Pipeline status checks defined in the repository to pass before merging.
3. WHEN a direct push or force push to the main branch is attempted without a Pull_Request, THE repository SHALL block the push and return a rejection message indicating that changes must go through a Pull_Request.
4. THE main branch protection rules SHALL apply to all users including repository administrators, with no bypass permitted.

### Requirement 5: Workflow Automation for Kanban Board

**User Story:** As a developer, I want automated Kanban board updates based on pull request activity, so that the board reflects the actual development status without manual updates.

#### Acceptance Criteria

1. WHEN a Pull_Request is opened and the Pull_Request body contains a closing keyword referencing an issue (e.g., "Closes #N", "Fixes #N", "Resolves #N"), THE Kanban_Board SHALL move the linked issue to the Review column within 60 seconds of the Pull_Request event.
2. WHEN a Pull_Request is merged, THE Kanban_Board SHALL move all issues linked via closing keywords in the Pull_Request body to the Done column within 60 seconds of the merge event.
3. WHEN a Pull_Request is closed without merging, THE Kanban_Board SHALL move all issues linked via closing keywords in the Pull_Request body back to the In Progress column within 60 seconds of the close event.
4. IF a Pull_Request event occurs and no issue is linked via closing keywords in the Pull_Request body, THEN THE Kanban_Board SHALL take no action and the workflow SHALL complete without error.
5. IF a Pull_Request event occurs and the linked issue is not present on the Kanban_Board, THEN THE Kanban_Board SHALL take no action for that issue and the workflow SHALL complete without error.

### Requirement 6: Lighthouse Performance Audit

**User Story:** As a developer, I want automated Lighthouse performance audits on pull requests, so that I can monitor and maintain website performance, accessibility, and SEO scores.

#### Acceptance Criteria

1. WHEN a Pull_Request is opened or updated targeting the main branch, THE CI_Pipeline SHALL run a Lighthouse audit on the `index.html` file within 120 seconds.
2. WHEN the Lighthouse audit completes, THE CI_Pipeline SHALL post a comment on the Pull_Request reporting the integer scores (0-100) for Performance, Accessibility, Best Practices, and SEO categories.
3. IF any Lighthouse category score falls below 80, THEN THE CI_Pipeline SHALL post a warning status check on the Pull_Request without blocking the merge.
4. IF the Lighthouse audit fails to complete, THEN THE CI_Pipeline SHALL post a comment on the Pull_Request indicating the audit could not be completed and report a neutral status check.

### Requirement 7: Issue Templates and Task Structure

**User Story:** As a developer, I want standardized issue templates, so that all tasks follow a consistent format and contain the necessary information for execution.

#### Acceptance Criteria

1. THE repository SHALL provide a bug report template stored in `.github/ISSUE_TEMPLATE/` with required fields: description, steps to reproduce, expected behavior, and actual behavior, and an optional field: screenshots.
2. THE repository SHALL provide a feature request template stored in `.github/ISSUE_TEMPLATE/` with required fields: description, motivation, proposed solution, and acceptance criteria.
3. THE repository SHALL provide a task template stored in `.github/ISSUE_TEMPLATE/` with required fields: description, related section of the site (free-text input), and a checklist of subtasks containing at least 1 item.
4. WHEN a new issue is created, THE repository SHALL present the available templates for selection.
5. THE repository SHALL include a template chooser configuration that disables blank issue creation, requiring users to select one of the defined templates.
6. THE repository SHALL mark required fields in each template such that an issue cannot be submitted with any required field left empty.
