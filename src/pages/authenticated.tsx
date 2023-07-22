import React from "react";
import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import { adminSDK } from "@/components/config/firebase-admin";
import nookies from "nookies";

const AuthenticatedPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => (
  <div>
    <p>{props.message}</p>
  </div>
);

export default AuthenticatedPage;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx);
    const token = await adminSDK.auth().verifyIdToken(cookies.accessToken);

    const { uid, email } = token;

    return {
      props: { message: `Your email is ${email} and your UID is ${uid}.` },
    };
  } catch (err) {
    // either the `token` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
    ctx.res.writeHead(302, { Location: "/auth/login" });
    ctx.res.end();
    return { props: {} as never };
  }
};
