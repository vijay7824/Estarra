import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact inquiry endpoints
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Thank you for your inquiry! We'll get back to you soon.",
        inquiry: inquiry 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid data provided", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit inquiry" 
        });
      }
    }
  });

  app.get("/api/contact-inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json({ success: true, inquiries });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch inquiries" 
      });
    }
  });

  app.get("/api/contact-inquiries/:id", async (req, res) => {
    try {
      const inquiry = await storage.getContactInquiry(req.params.id);
      if (!inquiry) {
        res.status(404).json({ 
          success: false, 
          message: "Inquiry not found" 
        });
        return;
      }
      res.json({ success: true, inquiry });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch inquiry" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
