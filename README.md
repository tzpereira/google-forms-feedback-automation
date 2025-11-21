# Automated Feedback Report Generator

This project automates the creation and delivery of practical feedback reports from form submissions. It integrates Google Forms, Google Sheets, and Google Apps Script, sending personalized reports by email.

## Main Workflow

1. User submits a Google Form.
2. Responses are saved in a linked Google Sheet.
3. Apps Script processes the submission, reads a prompt from your Google Drive, and generates a report using AI.
4. The report is emailed to the user.

## Setup Instructions

1. Create a Google Form and link it to a Google Sheet.
2. In the Sheet, go to **Extensions > Apps Script** and paste the code from `src/code.gs`.
3. Adjust field names in the script to match your form, or use generic names for flexibility.
4. Add a file named `feedback_prompt.txt` to your Google Drive. This file contains the instructions for report generation.
5. In Apps Script, set up a trigger for the main function (e.g., `onFormSubmit`) with the event type "On form submit".
6. Add any required API keys and grant permissions for email and Drive access.

## How the Prompt Works

- The script reads the prompt from `feedback_prompt.txt` in your Google Drive using the exact file name.
- To update report instructions, edit the file in Drive—no need to change the code.

## Customization

- Edit `feedback_prompt.txt` to change the report style or instructions.
- Use generic field names in the script for easy adaptation to different forms.

## Use Cases

- Automated feedback for surveys, assessments, or process reviews.
- Any scenario needing instant, actionable reports from form data.

---

> This documentation is intentionally generic and direct, with all necessary instructions for setup and use.
