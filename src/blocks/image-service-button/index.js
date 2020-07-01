import "./styles.editor.sass";

import { registerBlockType } from "@wordpress/blocks";
import { RichText } from "@wordpress/editor";
import { Button } from "@wordpress/components";

import edit from "./edit";

const attributes = {
    image: {
        type: "string",
        default: "http://placehold.it/1920x750"
    },
    btnHeadline: {
        type: "string",
        default: "Enter your headline"
    },
    btnDescription: {
        type: "string",
        default: "Enter your description"
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
        const { btnHeadline, btnDescription, btnUrl, image } = attributes;
        return (
       
            <a href={btnUrl}>
                <div class="wp-block-gb-service-image-button">
                    <img src={image}/>
                    <h3 class="title">{btnHeadline}</h3>
                    <div class="box-content">
                        <div class="box-text"><RichText.Content tagName="p" value={btnDescription} multiline="p" /></div>
                    </div>
                </div>
            </a>
          




           
        );
    }
});

