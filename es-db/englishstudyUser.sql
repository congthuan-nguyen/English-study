--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

-- Started on 2024-06-20 21:38:21

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 5 (class 2615 OID 2200)
-- Name: user; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--

CREATE SCHEMA "user";


ALTER SCHEMA "user" OWNER TO pg_database_owner;

--
-- TOC entry 4928 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA "user"; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA "user" IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 16402)
-- Name: account; Type: TABLE; Schema: user; Owner: postgres
--

CREATE TABLE "user".account (
    username character varying(20) NOT NULL,
    password character varying(255) NOT NULL,
    "firstName" character varying(100) NOT NULL,
    "lastName" character varying(100) NOT NULL,
    dob date NOT NULL,
    gender boolean NOT NULL,
    phone character varying(15) NOT NULL,
    email character varying(200) NOT NULL,
    status character varying(50) NOT NULL,
    "createdAt" date,
    "createdBy" character varying(200),
    "updatedAt" date,
    "updatedBy" character varying(200),
    "deletedAt" date
);


ALTER TABLE "user".account OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16433)
-- Name: attribute; Type: TABLE; Schema: user; Owner: postgres
--

CREATE TABLE "user".attribute (
    id bigint NOT NULL,
    name character varying(100) NOT NULL,
    status character varying(50) NOT NULL,
    "createdAt" date,
    "createdBy" character varying(200),
    "updatedAt" date,
    "updatedBy" character varying(200),
    "deletedAt" date
);


ALTER TABLE "user".attribute OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 16606)
-- Name: comment; Type: TABLE; Schema: user; Owner: postgres
--

CREATE TABLE "user".comment (
    id bigint NOT NULL,
    username character varying(20) NOT NULL,
    fid bigint NOT NULL,
    photoid bigint NOT NULL,
    rolecommentid bigint NOT NULL,
    commentreplyid bigint NOT NULL,
    value character varying(2000) NOT NULL,
    status character varying(50) NOT NULL,
    "createdAt" date,
    "createdBy" character varying(200),
    "updatedAt" date,
    "updatedBy" character varying(200),
    "deletedAt" date
);


ALTER TABLE "user".comment OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 16643)
-- Name: group; Type: TABLE; Schema: user; Owner: postgres
--

CREATE TABLE "user"."group" (
    id bigint NOT NULL,
    name character varying(100) NOT NULL,
    status character varying(50) NOT NULL,
    "createdAt" date,
    "createdBy" character varying(200),
    "updatedAt" date,
    "updatedBy" character varying(200),
    "deletedAt" date
);


ALTER TABLE "user"."group" OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 16657)
-- Name: groupdetail; Type: TABLE; Schema: user; Owner: postgres
--

CREATE TABLE "user".groupdetail (
    id bigint NOT NULL,
    username character varying(100) NOT NULL,
    groupid bigint NOT NULL,
    rolegourpid bigint NOT NULL,
    status character varying(50) NOT NULL,
    "createdAt" date,
    "createdBy" character varying(200),
    "updatedAt" date,
    "updatedBy" character varying(200),
    "deletedAt" date
);


ALTER TABLE "user".groupdetail OWNER TO postgres;

--
-- TOC entry 232 (class 1259 OID 16710)
-- Name: interaction; Type: TABLE; Schema: user; Owner: postgres
--

CREATE TABLE "user".interaction (
    id bigint NOT NULL,
    username character varying(100) NOT NULL,
    fid bigint NOT NULL,
    interactiontypeid bigint NOT NULL,
    name character varying(100) NOT NULL,
    status character varying(50) NOT NULL,
    "createdAt" date,
    "createdBy" character varying(200),
    "updatedAt" date,
    "updatedBy" character varying(200),
    "deletedAt" date
);


ALTER TABLE "user".interaction OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 16703)
-- Name: interactiontype; Type: TABLE; Schema: user; Owner: postgres
--

CREATE TABLE "user".interactiontype (
    id bigint NOT NULL,
    name character varying(100) NOT NULL,
    status character varying(50) NOT NULL,
    "createdAt" date,
    "createdBy" character varying(200),
    "updatedAt" date,
    "updatedBy" character varying(200),
    "deletedAt" date
);


ALTER TABLE "user".interactiontype OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16514)
-- Name: notebook; Type: TABLE; Schema: user; Owner: postgres
--

CREATE TABLE "user".notebook (
    id bigint NOT NULL,
    username character varying(20) NOT NULL,
    status character varying(50) NOT NULL,
    "createdAt" date,
    "createdBy" character varying(200),
    "updatedAt" date,
    "updatedBy" character varying(200),
    "deletedAt" date
);


ALTER TABLE "user".notebook OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 16524)
-- Name: notebookattribute; Type: TABLE; Schema: user; Owner: postgres
--

CREATE TABLE "user".notebookattribute (
    id bigint NOT NULL,
    notebookid bigint NOT NULL,
    attributeid bigint NOT NULL,
    status character varying(50) NOT NULL,
    "createdAt" date,
    "createdBy" character varying(200),
    "updatedAt" date,
    "updatedBy" character varying(200),
    "deletedAt" date
);


ALTER TABLE "user".notebookattribute OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16487)
-- Name: objectacess; Type: TABLE; Schema: user; Owner: postgres
--

CREATE TABLE "user".objectacess (
    id bigint NOT NULL,
    name character varying(20) NOT NULL,
    status character varying(50) NOT NULL,
    "createdAt" date,
    "createdBy" character varying(200),
    "updatedAt" date,
    "updatedBy" character varying(200),
    "deletedAt" date
);


ALTER TABLE "user".objectacess OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16440)
-- Name: objectedit; Type: TABLE; Schema: user; Owner: postgres
--

CREATE TABLE "user".objectedit (
    id bigint NOT NULL,
    name character varying(100) NOT NULL,
    status character varying(50) NOT NULL,
    "createdAt" date,
    "createdBy" character varying(200),
    "updatedAt" date,
    "updatedBy" character varying(200),
    "deletedAt" date
);


ALTER TABLE "user".objectedit OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16447)
-- Name: photo; Type: TABLE; Schema: user; Owner: postgres
--

CREATE TABLE "user".photo (
    id bigint NOT NULL,
    value character varying(100) NOT NULL,
    status character varying(50) NOT NULL,
    "createdAt" date,
    "createdBy" character varying(200),
    "updatedAt" date,
    "updatedBy" character varying(200),
    "deletedAt" date
);


ALTER TABLE "user".photo OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 16679)
-- Name: photopost; Type: TABLE; Schema: user; Owner: postgres
--

CREATE TABLE "user".photopost (
    id bigint NOT NULL,
    postid bigint NOT NULL,
    photoid bigint NOT NULL,
    value character varying(100) NOT NULL,
    status character varying(50) NOT NULL,
    "createdAt" date,
    "createdBy" character varying(200),
    "updatedAt" date,
    "updatedBy" character varying(200),
    "deletedAt" date
);


ALTER TABLE "user".photopost OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16497)
-- Name: post; Type: TABLE; Schema: user; Owner: postgres
--

CREATE TABLE "user".post (
    id bigint NOT NULL,
    username character varying(20) NOT NULL,
    "objectAccessId" bigint NOT NULL,
    value character varying(2000) NOT NULL,
    status character varying(50) NOT NULL,
    "createdAt" date,
    "createdBy" character varying(200),
    "updatedAt" date,
    "updatedBy" character varying(200),
    "deletedAt" date
);


ALTER TABLE "user".post OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16419)
-- Name: rolecomment; Type: TABLE; Schema: user; Owner: postgres
--

CREATE TABLE "user".rolecomment (
    id bigint NOT NULL,
    name character varying(100) NOT NULL,
    status character varying(50) NOT NULL,
    "createdAt" date,
    "createdBy" character varying(200),
    "updatedAt" date,
    "updatedBy" character varying(200),
    "deletedAt" date
);


ALTER TABLE "user".rolecomment OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16426)
-- Name: rolegroup; Type: TABLE; Schema: user; Owner: postgres
--

CREATE TABLE "user".rolegroup (
    id bigint NOT NULL,
    name character varying(100) NOT NULL,
    status character varying(50) NOT NULL,
    "createdAt" date,
    "createdBy" character varying(200),
    "updatedAt" date,
    "updatedBy" character varying(200),
    "deletedAt" date
);


ALTER TABLE "user".rolegroup OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16539)
-- Name: topic; Type: TABLE; Schema: user; Owner: postgres
--

CREATE TABLE "user".topic (
    id bigint NOT NULL,
    notebookid bigint NOT NULL,
    objectacessid bigint NOT NULL,
    status character varying(50) NOT NULL,
    "createdAt" date,
    "createdBy" character varying(200),
    "updatedAt" date,
    "updatedBy" character varying(200),
    "deletedAt" date,
    objecteditid bigint NOT NULL
);


ALTER TABLE "user".topic OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 16554)
-- Name: value; Type: TABLE; Schema: user; Owner: postgres
--

CREATE TABLE "user".value (
    id bigint NOT NULL,
    attributeid bigint NOT NULL,
    topicid bigint NOT NULL,
    value character varying(200) NOT NULL,
    status character varying(50) NOT NULL,
    "createdAt" date,
    "createdBy" character varying(200),
    "updatedAt" date,
    "updatedBy" character varying(200),
    "deletedAt" date
);


ALTER TABLE "user".value OWNER TO postgres;

--
-- TOC entry 4905 (class 0 OID 16402)
-- Dependencies: 215
-- Data for Name: account; Type: TABLE DATA; Schema: user; Owner: postgres
--

COPY "user".account (username, password, "firstName", "lastName", dob, gender, phone, email, status, "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt") FROM stdin;
\.


--
-- TOC entry 4908 (class 0 OID 16433)
-- Dependencies: 218
-- Data for Name: attribute; Type: TABLE DATA; Schema: user; Owner: postgres
--

COPY "user".attribute (id, name, status, "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt") FROM stdin;
\.


--
-- TOC entry 4917 (class 0 OID 16606)
-- Dependencies: 227
-- Data for Name: comment; Type: TABLE DATA; Schema: user; Owner: postgres
--

COPY "user".comment (id, username, fid, photoid, rolecommentid, commentreplyid, value, status, "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt") FROM stdin;
\.


--
-- TOC entry 4918 (class 0 OID 16643)
-- Dependencies: 228
-- Data for Name: group; Type: TABLE DATA; Schema: user; Owner: postgres
--

COPY "user"."group" (id, name, status, "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt") FROM stdin;
\.


--
-- TOC entry 4919 (class 0 OID 16657)
-- Dependencies: 229
-- Data for Name: groupdetail; Type: TABLE DATA; Schema: user; Owner: postgres
--

COPY "user".groupdetail (id, username, groupid, rolegourpid, status, "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt") FROM stdin;
\.


--
-- TOC entry 4922 (class 0 OID 16710)
-- Dependencies: 232
-- Data for Name: interaction; Type: TABLE DATA; Schema: user; Owner: postgres
--

COPY "user".interaction (id, username, fid, interactiontypeid, name, status, "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt") FROM stdin;
\.


--
-- TOC entry 4921 (class 0 OID 16703)
-- Dependencies: 231
-- Data for Name: interactiontype; Type: TABLE DATA; Schema: user; Owner: postgres
--

COPY "user".interactiontype (id, name, status, "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt") FROM stdin;
\.


--
-- TOC entry 4913 (class 0 OID 16514)
-- Dependencies: 223
-- Data for Name: notebook; Type: TABLE DATA; Schema: user; Owner: postgres
--

COPY "user".notebook (id, username, status, "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt") FROM stdin;
\.


--
-- TOC entry 4914 (class 0 OID 16524)
-- Dependencies: 224
-- Data for Name: notebookattribute; Type: TABLE DATA; Schema: user; Owner: postgres
--

COPY "user".notebookattribute (id, notebookid, attributeid, status, "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt") FROM stdin;
\.


--
-- TOC entry 4911 (class 0 OID 16487)
-- Dependencies: 221
-- Data for Name: objectacess; Type: TABLE DATA; Schema: user; Owner: postgres
--

COPY "user".objectacess (id, name, status, "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt") FROM stdin;
\.


--
-- TOC entry 4909 (class 0 OID 16440)
-- Dependencies: 219
-- Data for Name: objectedit; Type: TABLE DATA; Schema: user; Owner: postgres
--

COPY "user".objectedit (id, name, status, "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt") FROM stdin;
\.


--
-- TOC entry 4910 (class 0 OID 16447)
-- Dependencies: 220
-- Data for Name: photo; Type: TABLE DATA; Schema: user; Owner: postgres
--

COPY "user".photo (id, value, status, "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt") FROM stdin;
\.


--
-- TOC entry 4920 (class 0 OID 16679)
-- Dependencies: 230
-- Data for Name: photopost; Type: TABLE DATA; Schema: user; Owner: postgres
--

COPY "user".photopost (id, postid, photoid, value, status, "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt") FROM stdin;
\.


--
-- TOC entry 4912 (class 0 OID 16497)
-- Dependencies: 222
-- Data for Name: post; Type: TABLE DATA; Schema: user; Owner: postgres
--

COPY "user".post (id, username, "objectAccessId", value, status, "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt") FROM stdin;
\.


--
-- TOC entry 4906 (class 0 OID 16419)
-- Dependencies: 216
-- Data for Name: rolecomment; Type: TABLE DATA; Schema: user; Owner: postgres
--

COPY "user".rolecomment (id, name, status, "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt") FROM stdin;
\.


--
-- TOC entry 4907 (class 0 OID 16426)
-- Dependencies: 217
-- Data for Name: rolegroup; Type: TABLE DATA; Schema: user; Owner: postgres
--

COPY "user".rolegroup (id, name, status, "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt") FROM stdin;
\.


--
-- TOC entry 4915 (class 0 OID 16539)
-- Dependencies: 225
-- Data for Name: topic; Type: TABLE DATA; Schema: user; Owner: postgres
--

COPY "user".topic (id, notebookid, objectacessid, status, "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", objecteditid) FROM stdin;
\.


--
-- TOC entry 4916 (class 0 OID 16554)
-- Dependencies: 226
-- Data for Name: value; Type: TABLE DATA; Schema: user; Owner: postgres
--

COPY "user".value (id, attributeid, topicid, value, status, "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt") FROM stdin;
\.


--
-- TOC entry 4702 (class 2606 OID 16406)
-- Name: account account_pkey; Type: CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".account
    ADD CONSTRAINT account_pkey PRIMARY KEY (username);


--
-- TOC entry 4708 (class 2606 OID 16439)
-- Name: attribute attribute_pkey; Type: CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".attribute
    ADD CONSTRAINT attribute_pkey PRIMARY KEY (id);


--
-- TOC entry 4726 (class 2606 OID 16612)
-- Name: comment comment_pkey; Type: CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".comment
    ADD CONSTRAINT comment_pkey PRIMARY KEY (id);


--
-- TOC entry 4728 (class 2606 OID 16649)
-- Name: group group_pkey; Type: CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user"."group"
    ADD CONSTRAINT group_pkey PRIMARY KEY (id);


--
-- TOC entry 4730 (class 2606 OID 16663)
-- Name: groupdetail groupdetail_pkey; Type: CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".groupdetail
    ADD CONSTRAINT groupdetail_pkey PRIMARY KEY (id);


--
-- TOC entry 4736 (class 2606 OID 16716)
-- Name: interaction interaction_pkey; Type: CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".interaction
    ADD CONSTRAINT interaction_pkey PRIMARY KEY (id);


--
-- TOC entry 4734 (class 2606 OID 16709)
-- Name: interactiontype interactiontype_pkey; Type: CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".interactiontype
    ADD CONSTRAINT interactiontype_pkey PRIMARY KEY (id);


--
-- TOC entry 4718 (class 2606 OID 16518)
-- Name: notebook notebook_pkey; Type: CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".notebook
    ADD CONSTRAINT notebook_pkey PRIMARY KEY (id);


--
-- TOC entry 4720 (class 2606 OID 16528)
-- Name: notebookattribute notebookattribute_pkey; Type: CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".notebookattribute
    ADD CONSTRAINT notebookattribute_pkey PRIMARY KEY (id);


--
-- TOC entry 4714 (class 2606 OID 16491)
-- Name: objectacess objectacess_pkey; Type: CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".objectacess
    ADD CONSTRAINT objectacess_pkey PRIMARY KEY (id);


--
-- TOC entry 4710 (class 2606 OID 16446)
-- Name: objectedit objectedit_pkey; Type: CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".objectedit
    ADD CONSTRAINT objectedit_pkey PRIMARY KEY (id);


--
-- TOC entry 4712 (class 2606 OID 16453)
-- Name: photo photo_pkey; Type: CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".photo
    ADD CONSTRAINT photo_pkey PRIMARY KEY (id);


--
-- TOC entry 4732 (class 2606 OID 16685)
-- Name: photopost photopost_pkey; Type: CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".photopost
    ADD CONSTRAINT photopost_pkey PRIMARY KEY (id);


--
-- TOC entry 4716 (class 2606 OID 16503)
-- Name: post post_pkey; Type: CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".post
    ADD CONSTRAINT post_pkey PRIMARY KEY (id);


--
-- TOC entry 4704 (class 2606 OID 16425)
-- Name: rolecomment rolecomment_pkey; Type: CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".rolecomment
    ADD CONSTRAINT rolecomment_pkey PRIMARY KEY (id);


--
-- TOC entry 4706 (class 2606 OID 16432)
-- Name: rolegroup rolegroup_pkey; Type: CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".rolegroup
    ADD CONSTRAINT rolegroup_pkey PRIMARY KEY (id);


--
-- TOC entry 4722 (class 2606 OID 16543)
-- Name: topic topic_pkey; Type: CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".topic
    ADD CONSTRAINT topic_pkey PRIMARY KEY (id);


--
-- TOC entry 4724 (class 2606 OID 16560)
-- Name: value value_pkey; Type: CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".value
    ADD CONSTRAINT value_pkey PRIMARY KEY (id);


--
-- TOC entry 4747 (class 2606 OID 16613)
-- Name: comment comment_fkeyaccount; Type: FK CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".comment
    ADD CONSTRAINT comment_fkeyaccount FOREIGN KEY (username) REFERENCES "user".account(username);


--
-- TOC entry 4748 (class 2606 OID 16638)
-- Name: comment comment_fkeycommentreplyid; Type: FK CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".comment
    ADD CONSTRAINT comment_fkeycommentreplyid FOREIGN KEY (id) REFERENCES "user".comment(id) NOT VALID;


--
-- TOC entry 4749 (class 2606 OID 16618)
-- Name: comment comment_fkeyphoto; Type: FK CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".comment
    ADD CONSTRAINT comment_fkeyphoto FOREIGN KEY (photoid) REFERENCES "user".photo(id);


--
-- TOC entry 4750 (class 2606 OID 16623)
-- Name: comment comment_fkeypost; Type: FK CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".comment
    ADD CONSTRAINT comment_fkeypost FOREIGN KEY (fid) REFERENCES "user".post(id);


--
-- TOC entry 4751 (class 2606 OID 16633)
-- Name: comment comment_fkeyrolecomment; Type: FK CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".comment
    ADD CONSTRAINT comment_fkeyrolecomment FOREIGN KEY (rolecommentid) REFERENCES "user".rolecomment(id) NOT VALID;


--
-- TOC entry 4752 (class 2606 OID 16628)
-- Name: comment comment_fkeytopic; Type: FK CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".comment
    ADD CONSTRAINT comment_fkeytopic FOREIGN KEY (fid) REFERENCES "user".topic(id);


--
-- TOC entry 4753 (class 2606 OID 16664)
-- Name: groupdetail groupdetail_fkeyaccount; Type: FK CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".groupdetail
    ADD CONSTRAINT groupdetail_fkeyaccount FOREIGN KEY (username) REFERENCES "user".account(username) NOT VALID;


--
-- TOC entry 4754 (class 2606 OID 16669)
-- Name: groupdetail groupdetail_fkeygroup; Type: FK CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".groupdetail
    ADD CONSTRAINT groupdetail_fkeygroup FOREIGN KEY (groupid) REFERENCES "user"."group"(id) NOT VALID;


--
-- TOC entry 4755 (class 2606 OID 16674)
-- Name: groupdetail groupdetail_fkeyrolegroup; Type: FK CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".groupdetail
    ADD CONSTRAINT groupdetail_fkeyrolegroup FOREIGN KEY (rolegourpid) REFERENCES "user".rolegroup(id) NOT VALID;


--
-- TOC entry 4758 (class 2606 OID 16722)
-- Name: interaction interation_fkeyInteractionType; Type: FK CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".interaction
    ADD CONSTRAINT "interation_fkeyInteractionType" FOREIGN KEY (interactiontypeid) REFERENCES "user".interactiontype(id) NOT VALID;


--
-- TOC entry 4759 (class 2606 OID 16717)
-- Name: interaction interation_fkeyaccount; Type: FK CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".interaction
    ADD CONSTRAINT interation_fkeyaccount FOREIGN KEY (username) REFERENCES "user".account(username) NOT VALID;


--
-- TOC entry 4760 (class 2606 OID 16727)
-- Name: interaction interation_fkeypost; Type: FK CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".interaction
    ADD CONSTRAINT interation_fkeypost FOREIGN KEY (fid) REFERENCES "user".post(id) NOT VALID;


--
-- TOC entry 4761 (class 2606 OID 16732)
-- Name: interaction interation_fkeytopic; Type: FK CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".interaction
    ADD CONSTRAINT interation_fkeytopic FOREIGN KEY (fid) REFERENCES "user".topic(id) NOT VALID;


--
-- TOC entry 4739 (class 2606 OID 16519)
-- Name: notebook notebook_fkeyaccount; Type: FK CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".notebook
    ADD CONSTRAINT notebook_fkeyaccount FOREIGN KEY (username) REFERENCES "user".account(username) NOT VALID;


--
-- TOC entry 4740 (class 2606 OID 16534)
-- Name: notebookattribute notebookattribute_fkeyattribute; Type: FK CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".notebookattribute
    ADD CONSTRAINT notebookattribute_fkeyattribute FOREIGN KEY (id) REFERENCES "user".attribute(id);


--
-- TOC entry 4741 (class 2606 OID 16529)
-- Name: notebookattribute notebookattribute_fkeynotebook; Type: FK CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".notebookattribute
    ADD CONSTRAINT notebookattribute_fkeynotebook FOREIGN KEY (id) REFERENCES "user".notebook(id);


--
-- TOC entry 4756 (class 2606 OID 16686)
-- Name: photopost photopost_fkeyphoto; Type: FK CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".photopost
    ADD CONSTRAINT photopost_fkeyphoto FOREIGN KEY (photoid) REFERENCES "user".photo(id) NOT VALID;


--
-- TOC entry 4757 (class 2606 OID 16691)
-- Name: photopost photopost_fkeypost; Type: FK CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".photopost
    ADD CONSTRAINT photopost_fkeypost FOREIGN KEY (postid) REFERENCES "user".post(id) NOT VALID;


--
-- TOC entry 4737 (class 2606 OID 16504)
-- Name: post post_fkey_account; Type: FK CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".post
    ADD CONSTRAINT post_fkey_account FOREIGN KEY (username) REFERENCES "user".account(username);


--
-- TOC entry 4738 (class 2606 OID 16509)
-- Name: post post_fkey_objectAcess; Type: FK CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".post
    ADD CONSTRAINT "post_fkey_objectAcess" FOREIGN KEY ("objectAccessId") REFERENCES "user".objectacess(id);


--
-- TOC entry 4742 (class 2606 OID 16544)
-- Name: topic topic_fkeynotebook; Type: FK CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".topic
    ADD CONSTRAINT topic_fkeynotebook FOREIGN KEY (id) REFERENCES "user".notebook(id);


--
-- TOC entry 4743 (class 2606 OID 16549)
-- Name: topic topic_fkeyobjectacess; Type: FK CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".topic
    ADD CONSTRAINT topic_fkeyobjectacess FOREIGN KEY (id) REFERENCES "user".objectacess(id);


--
-- TOC entry 4744 (class 2606 OID 16571)
-- Name: topic topic_fkeyobjectedit; Type: FK CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".topic
    ADD CONSTRAINT topic_fkeyobjectedit FOREIGN KEY (objecteditid) REFERENCES "user".objectedit(id) NOT VALID;


--
-- TOC entry 4745 (class 2606 OID 16566)
-- Name: value value_fkeyattribute; Type: FK CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".value
    ADD CONSTRAINT value_fkeyattribute FOREIGN KEY (id) REFERENCES "user".attribute(id);


--
-- TOC entry 4746 (class 2606 OID 16561)
-- Name: value value_fkeytopic; Type: FK CONSTRAINT; Schema: user; Owner: postgres
--

ALTER TABLE ONLY "user".value
    ADD CONSTRAINT value_fkeytopic FOREIGN KEY (id) REFERENCES "user".topic(id);


-- Completed on 2024-06-20 21:38:21

--
-- PostgreSQL database dump complete
--

