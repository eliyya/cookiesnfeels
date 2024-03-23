-- CreateTable
CREATE TABLE "facebook_connection" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "picture" TEXT NOT NULL,

    CONSTRAINT "facebook_connection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL,
    "email" TEXT,
    "user_id" TEXT,
    "facebook_connection_id" TEXT,

    CONSTRAINT "register_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "displayname" TEXT,
    "picture" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "facebook_connection_email_key" ON "facebook_connection"("email");

-- CreateIndex
CREATE UNIQUE INDEX "register_email_key" ON "register"("email");

-- CreateIndex
CREATE UNIQUE INDEX "register_user_id_key" ON "register"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "register_facebook_connection_id_key" ON "register"("facebook_connection_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- AddForeignKey
ALTER TABLE "register" ADD CONSTRAINT "public_register_facebook_connection_id_fkey" FOREIGN KEY ("facebook_connection_id") REFERENCES "facebook_connection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register" ADD CONSTRAINT "public_register_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
