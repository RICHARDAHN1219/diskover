"use client"

import React from "react";
import { MessagePhoto } from "./message-icon";
import { getMessage } from "@/app/lib/user-getter";

export function Message() {
    // Assuming you have a dynamic user ID, replace 'dynamicUserId' with the actual user ID
    const dynamicUserId = "123"; // Replace this with your actual logic to get the user ID

    return (
        
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <MessagePhoto />
            
            <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', marginTop: '20px' }}>
                <div style={{ marginBottom: '10px' }}>Conversation with Richard </div>
                
                {/* Example messages */}
                <div style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                    <strong>You:</strong> Hey Richard, I saw your profile and I love your work. Would you by any chance be interested in playing at my wedding?
                </div>
                
                <div style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', paddingTop: '10px' }}>
                    <strong>Richard:</strong> Hi there! I'm honored that you enjoy my work. Congratulations on your upcoming wedding! I'd be delighted to play. Could you please provide more details?
                </div>
                
                {/* Add more messages as needed */}
                
                {/* Fake input area */}
                <div style={{ paddingTop: '10px' }}>
                    <textarea placeholder="Type your message..." style={{ width: '100%', padding: '5px', borderRadius: '5px' }}></textarea>
                    <button style={{ marginTop: '10px', padding: '5px', borderRadius: '5px', cursor: 'pointer' }}>Send</button>
                </div>
            </div>
        </div>
    );
}


//export {Portfolio};
