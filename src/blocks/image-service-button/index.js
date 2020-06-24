import "./styles.editor.sass";

import { registerBlockType } from "@wordpress/blocks";
import { RichText } from "@wordpress/editor";
import { Button } from "@wordpress/components";

import edit from "./edit";

const attributes = {
    copy: {
        type: "string",
        source: "html",
        selector: "p"
    },
    headline: {
        type: "string",
        source: "html",
        selector: "h2",
        default: "Image Service Block"
    },
    image: {
        type: "string",
        default: "http://placehold.it/1920x750"
    },
    btnLabel: {
        type: "string",
        default: "Some button label"
    },
    btnUrl: {
        type: "string",
        default: "#"
    }
};

registerBlockType("gb/image-service-button", {
    title: "Image Service button",
    description: "Image Service button",
    category: "good-blocks",
    icon: "laptop",
    keywords: ["image", "service", "button"],

    attributes,

    edit,

    save: ({ attributes }) => {
        const { copy, headline, btnLabel, btnUrl, image } = attributes;
        return (
       
            <a href={btnUrl} style="text-decoration:none">
                <div class="wp-block-gb-service-image-button">
                    <img src={image}/>
                    <h3 class="title">{headline}</h3>
                    <div class="box-content">
                        <div class="box-text"><RichText.Content tagName="p" value={copy} multiline="p" /></div>
                    </div>
                </div>
            </a>
          




           
        );
    }
});

