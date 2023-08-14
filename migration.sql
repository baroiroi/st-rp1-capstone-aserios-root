CREATE TABLE "users" (
  "user_id" integer NOT NULL,
  "email" character varying(255),
  "password" character varying(255),
  "name" character varying(255),
  "address" character varying(255),
  "role" character varying(255),
  "contact_num" character varying(255),
  "gender" character varying(255),
  "birthdate" date,
  created_at timestamp without time zone NOT NULL DEFAULT 'now()',
    updated_at timestamp without time zone NOT NULL DEFAULT 'now()',
    archieved_at timestamp without time zone,
    deleted_at timestamp without time zone,
  CONSTRAINT users_pkey PRIMARY KEY (user_id),
    CONSTRAINT unique_email UNIQUE (email)
);

CREATE SEQUENCE IF NOT EXISTS public.users_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY users.user_id;

ALTER TABLE users ALTER COLUMN user_id SET DEFAULT nextval('users_id_seq'::regclass);

CREATE TABLE "schedules" (
  "schedule_id" integer NOT NULL,
  "user_id" integer,
  "dentist_id" integer,
  "date" date,
  created_at timestamp without time zone NOT NULL DEFAULT 'now()',
    updated_at timestamp without time zone NOT NULL DEFAULT 'now()',
    archieved_at timestamp without time zone,
    deleted_at timestamp without time zone,
  CONSTRAINT schedules_pkey PRIMARY KEY (schedule_id)
);

CREATE SEQUENCE IF NOT EXISTS public.schedule_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY schedules.schedule_id;

ALTER TABLE schedules ALTER COLUMN schedule_id SET DEFAULT nextval('schedule_id_seq'::regclass);


CREATE TABLE "services" (
  "service_id" integer NOT NULL,
  "service" character varying(255),
  CONSTRAINT services_pkey PRIMARY KEY (service_id)
);

CREATE SEQUENCE IF NOT EXISTS public.service_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY services.service_id;

ALTER TABLE services ALTER COLUMN service_id SET DEFAULT nextval('service_id_seq'::regclass);


CREATE TABLE "availed_services" (
  "a_services_id" integer NOT NULL,
  "service_id" integer,
  "schedule_id" integer,
  created_at timestamp without time zone NOT NULL DEFAULT 'now()',
    updated_at timestamp without time zone NOT NULL DEFAULT 'now()',
    archieved_at timestamp without time zone,
    deleted_at timestamp without time zone,
  CONSTRAINT availed_services_pkey PRIMARY KEY (a_services_id)
);

CREATE SEQUENCE IF NOT EXISTS public.a_services_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY availed_services.a_services_id;

ALTER TABLE availed_services ALTER COLUMN a_services_id SET DEFAULT nextval('a_services_id_seq'::regclass);



