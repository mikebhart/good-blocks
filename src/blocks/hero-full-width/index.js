import "./styles.editor.sass";
import { registerBlockType } from "@wordpress/blocks";
import { RichText } from "@wordpress/editor";

import edit from "./edit";

const attributes = {
    subline: {
        type: "string",
        source: "html",
        selector: "h4"
    },
    headline: {
        type: "string",
        source: "html",
        selector: "h1"
    },
    bgImage: {
        type: "string",
        default: "http://placehold.it/1920x750"
    }
};

registerBlockType("gb/hero-full-width", {
    title: "Hero Full Width",
    description: "Hero Full Width Block Description",
    category: "good-blocks",
    icon: "laptop",
    keywords: ["hero", "full width"],

    attributes,

    edit,

    save: ({ attributes }) => {
        const { subline, headline, bgImage } = attributes;

        return (
            <div style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="container">
                    <div className="wp-block-gb-hero-full-width__content">
                        {subline && (
                            <RichText.Content
                                className={"wp-block-gb-hero-full-width__subline"}
                                tagName="h4"
                                value={subline}
                            />
                        )}
                        {headline && (
                            <RichText.Content
                                className={"wp-block-gb-hero-full-width__headline"}
                                tagName="h1"
                                value={headline}
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    }
});
