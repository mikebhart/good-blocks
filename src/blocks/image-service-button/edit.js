import { Component } from "@wordpress/element";
import { Button, PanelBody, PanelRow, TextControl, TextareaControl } from "@wordpress/components";
import { RichText, MediaUpload, InspectorControls } from "@wordpress/editor";

class ImageServiceButton extends Component {

    onImageSelect = imageObject => {
        this.props.setAttributes({
            image: imageObject.sizes.full.url
        });
    };

    render() {
        const { attributes } = this.props;
        const { image, btnHeadline, btnDescription, btnUrl } = attributes;

        return [
            <InspectorControls>
                <PanelBody title="Image Service Button">
                    <PanelRow>
                        <MediaUpload
                            onSelect={this.onImageSelect}
                            type="image"
                            value={image}
                            render={({ open }) => (
                                <Button isDefault onClick={open}>
                                    Upload Image
                                </Button>
                            )}
                        />
                    </PanelRow>
                    <PanelRow className="d-block">
                        <TextControl
                            label="Button Headline"
                            value={btnHeadline}
                            onChange={btnHeadline => this.props.setAttributes({ btnHeadline })}
                        />
                    </PanelRow>
                    <PanelRow className="d-block">
                        <TextareaControl
                            label="Button Description"
                            value={btnDescription}
                            onChange={btnDescription => this.props.setAttributes({ btnDescription })}
                        />
                    </PanelRow>
                    <PanelRow className="d-block">
                        <TextControl
                            label="Button Link Url"
                            value={btnUrl}
                            onChange={btnUrl => this.props.setAttributes({ btnUrl })}
                        />
                    </PanelRow>
                  

                </PanelBody>
            </InspectorControls>,


            <a href={btnUrl}>
                <div class="wp-block-gb-service-image-button">
                    <img src={image}/>
                    <h3 class="title">{btnHeadline}</h3>
                    <div class="box-content">
                        <div class="box-text"><RichText.Content tagName="p" value={btnDescription} multiline="p" /></div>
                    </div>
                </div>
            </a>


          
        ];
    }
}

export default ImageServiceButton;
