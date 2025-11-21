async function onFormSubmit(e) {
    const row = e.namedValues;

    // Payload structure (generic fields)
    const payload = {
        email: row["field_email"][0],
        field1: row["field1"][0],
        field2: row["field2"][0],
        field3: row["field3"][0]
    };

    const apiKey = "YOUR_API_KEY_HERE";
    const prompt = getFeedbackPrompt(payload);

    const response = UrlFetchApp.fetch("https://api.openai.com/v1/chat/completions", {
        method: "post",
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        },
        payload: JSON.stringify({
            model: "gpt-4.1-mini",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.3
        })
    });

    const result = JSON.parse(response.getContentText());
    const report = result.choices[0].message.content;

    // Send report
    MailApp.sendEmail({
        to: payload.email,
        subject: "Your Operational Report",
        htmlBody: report
    });
}

/**
 * Loads the prompt from an external file
 */
function getFeedbackPrompt(data) {
    const file = DriveApp.getFilesByName("feedback_prompt.txt").next();
    const promptText = file.getBlob().getDataAsString();
    return `User data: ${JSON.stringify(data, null, 2)}\n\n${promptText}`;
}