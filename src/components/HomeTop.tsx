"use client"

import styled from "styled-components"

const Design = styled.section`
    max-width: 1440px;
    width: 100%;
    padding-left: 167px;
    padding-right: 167px;
    padding-bottom: 60px;
    margin-top: 100px;
    background-image: url('../assets/images/illustration-editor-desktop.svg');
    background-size: 60%;
    background-repeat: no-repeat;
    background-position-x: 145%;
    background-position-y: center;

    h2 {
        text-align: center;
        margin-bottom: 80px;
        font-size: 32px;
        font-weight: 500;
        color: var(--text-body);
    }
`;

const Text = styled.div`
    max-width: 50%;

    h3 {
        color: var(--text-body);
        margin-bottom: 20px;
        font-size: 24px;
    }

    p {
        font-size: 14px;
        line-height: 24px;
        color: var(--dark-grayish);
    }

    div {
        margin-bottom: 35px;
    }
`;

export const HomeTop = () => {
    return (
        <Design>
            <h2>Designed for the future</h2>
            <Text>
                <div>
                    <h3>Introducing an extensible editor</h3>
                    <p>
                        Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
                    </p>
                </div>
                <div>
                    <h3>Robust content management</h3>
                    <p>
                        Flexibile content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.
                    </p>
                </div>
            </Text>
        </Design>
    )
}