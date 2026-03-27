export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      affiliate_clicks: {
        Row: {
          clicked_at: string;
          coupang_product_id: string;
          destination_url: string;
          id: string;
          referrer: string | null;
          session_id: string | null;
          source_id: string | null;
          source_type: "recommendation" | "article" | "social";
          user_agent: string | null;
        };
        Insert: {
          clicked_at?: string;
          coupang_product_id: string;
          destination_url: string;
          id?: string;
          referrer?: string | null;
          session_id?: string | null;
          source_id?: string | null;
          source_type: "recommendation" | "article" | "social";
          user_agent?: string | null;
        };
        Update: {
          clicked_at?: string;
          coupang_product_id?: string;
          destination_url?: string;
          id?: string;
          referrer?: string | null;
          session_id?: string | null;
          source_id?: string | null;
          source_type?: "recommendation" | "article" | "social";
          user_agent?: string | null;
        };
        Relationships: [];
      };
      article_sources: {
        Row: {
          article_id: string;
          checked_at: string | null;
          created_at: string;
          id: string;
          notes: string | null;
          source_name: string;
          source_url: string;
        };
        Insert: {
          article_id: string;
          checked_at?: string | null;
          created_at?: string;
          id?: string;
          notes?: string | null;
          source_name: string;
          source_url: string;
        };
        Update: {
          article_id?: string;
          checked_at?: string | null;
          created_at?: string;
          id?: string;
          notes?: string | null;
          source_name?: string;
          source_url?: string;
        };
        Relationships: [];
      };
      articles: {
        Row: {
          content_md: string | null;
          created_at: string;
          excerpt: string | null;
          id: string;
          published_at: string | null;
          seo_description: string | null;
          seo_title: string | null;
          slug: string;
          status: "draft" | "published" | "archived";
          title: string;
          updated_at: string;
        };
        Insert: {
          content_md?: string | null;
          created_at?: string;
          excerpt?: string | null;
          id?: string;
          published_at?: string | null;
          seo_description?: string | null;
          seo_title?: string | null;
          slug: string;
          status?: "draft" | "published" | "archived";
          title: string;
          updated_at?: string;
        };
        Update: {
          content_md?: string | null;
          created_at?: string;
          excerpt?: string | null;
          id?: string;
          published_at?: string | null;
          seo_description?: string | null;
          seo_title?: string | null;
          slug?: string;
          status?: "draft" | "published" | "archived";
          title?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      coupang_products: {
        Row: {
          availability: string | null;
          brand: string | null;
          created_at: string;
          currency: string;
          deeplink: string;
          external_product_id: string;
          id: string;
          image_url: string | null;
          price: number | null;
          raw_payload: Json;
          synced_at: string;
          title: string;
          updated_at: string;
        };
        Insert: {
          availability?: string | null;
          brand?: string | null;
          created_at?: string;
          currency?: string;
          deeplink: string;
          external_product_id: string;
          id?: string;
          image_url?: string | null;
          price?: number | null;
          raw_payload?: Json;
          synced_at?: string;
          title: string;
          updated_at?: string;
        };
        Update: {
          availability?: string | null;
          brand?: string | null;
          created_at?: string;
          currency?: string;
          deeplink?: string;
          external_product_id?: string;
          id?: string;
          image_url?: string | null;
          price?: number | null;
          raw_payload?: Json;
          synced_at?: string;
          title?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      job_runs: {
        Row: {
          ended_at: string | null;
          id: string;
          job_name: string;
          log_excerpt: string | null;
          metadata: Json;
          started_at: string;
          status: "queued" | "running" | "succeeded" | "failed";
        };
        Insert: {
          ended_at?: string | null;
          id?: string;
          job_name: string;
          log_excerpt?: string | null;
          metadata?: Json;
          started_at?: string;
          status: "queued" | "running" | "succeeded" | "failed";
        };
        Update: {
          ended_at?: string | null;
          id?: string;
          job_name?: string;
          log_excerpt?: string | null;
          metadata?: Json;
          started_at?: string;
          status?: "queued" | "running" | "succeeded" | "failed";
        };
        Relationships: [];
      };
      recommendation_product_links: {
        Row: {
          coupang_product_id: string;
          created_at: string;
          id: string;
          is_active: boolean;
          rationale: string | null;
          recommendation_profile_id: string;
          slot: number;
          updated_at: string;
        };
        Insert: {
          coupang_product_id: string;
          created_at?: string;
          id?: string;
          is_active?: boolean;
          rationale?: string | null;
          recommendation_profile_id: string;
          slot: number;
          updated_at?: string;
        };
        Update: {
          coupang_product_id?: string;
          created_at?: string;
          id?: string;
          is_active?: boolean;
          rationale?: string | null;
          recommendation_profile_id?: string;
          slot?: number;
          updated_at?: string;
        };
        Relationships: [];
      };
      recommendation_profiles: {
        Row: {
          created_at: string;
          device_family: string;
          id: string;
          is_active: boolean;
          key: string;
          summary: string | null;
          title: string;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          device_family?: string;
          id?: string;
          is_active?: boolean;
          key: string;
          summary?: string | null;
          title: string;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          device_family?: string;
          id?: string;
          is_active?: boolean;
          key?: string;
          summary?: string | null;
          title?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      social_posts: {
        Row: {
          asset_manifest: Json;
          caption: string | null;
          created_at: string;
          external_post_id: string | null;
          format: string;
          id: string;
          performance_snapshot: Json;
          platform: string;
          published_at: string | null;
          scheduled_for: string | null;
          source_article_id: string | null;
          status: "draft" | "queued" | "published" | "failed";
          title: string | null;
          updated_at: string;
        };
        Insert: {
          asset_manifest?: Json;
          caption?: string | null;
          created_at?: string;
          external_post_id?: string | null;
          format: string;
          id?: string;
          performance_snapshot?: Json;
          platform?: string;
          published_at?: string | null;
          scheduled_for?: string | null;
          source_article_id?: string | null;
          status?: "draft" | "queued" | "published" | "failed";
          title?: string | null;
          updated_at?: string;
        };
        Update: {
          asset_manifest?: Json;
          caption?: string | null;
          created_at?: string;
          external_post_id?: string | null;
          format?: string;
          id?: string;
          performance_snapshot?: Json;
          platform?: string;
          published_at?: string | null;
          scheduled_for?: string | null;
          source_article_id?: string | null;
          status?: "draft" | "queued" | "published" | "failed";
          title?: string | null;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
