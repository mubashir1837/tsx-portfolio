import React from "react";
import { Button } from "reactstrap";
import { socialLinks } from "../portfolio";

const SocialLinks = () => {
  return (
    <div className="btn-wrapper text-lg">
      {socialLinks.email && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="white"
          rel="noopener"
          aria-label="URL"
          href={`mailto:${socialLinks.email}`}
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-envelope" />
          </span>
        </Button>
      )}
       {socialLinks.whatsapp && (
        <Button
          className="btn-icon-only rounded-circle  ml-1"
          color="success"
          href={socialLinks.whatsapp}
          rel="noopener"
          aria-label="whatsapp"
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-whatsapp fa-lg" />
          </span>
        </Button>
      )}
       {socialLinks.github && (
        <Button
          className="btn-icon-only rounded-circle  ml-1"
          color="secondary"
          href={socialLinks.github}
          rel="noopener"
          aria-label="Github"
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-github fa-lg" />
          </span>
        </Button>
      )}
      
      {socialLinks.linkedin && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="twitter"
          rel="noopener"
          aria-label="Linkedin"
          href={socialLinks.linkedin}
          target="_blank"
        >
          <span className="btn-inner--icon ">
            <i className="fa fa-linkedin" />
          </span>
        </Button>
      )}
     
      {socialLinks.instagram && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="instagram"
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-instagram" />
          </span>
        </Button>
      )}
      {socialLinks.facebook && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="facebook"
          href={socialLinks.facebook}
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-facebook-square" />
          </span>
        </Button>
      )}
      
    </div>
  );
};

export default SocialLinks;
