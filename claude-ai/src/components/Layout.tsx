"use client";
import * as React from "react";
import { Authenticator, Flex } from "@aws-amplify/ui-react";
import { ConversationsProvider } from "@/providers/ConversationsProvider";
import { SidebarProvider } from "@/providers/SidebarProvider";
import { Header } from "./Header";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <Authenticator>
      <ConversationsProvider>
        <SidebarProvider>
          <Flex direction="column" width="100vw" height="100vh" overflow="hidden">
            <Header />
            <Flex direction="row" flex="1" overflow="hidden">
              {children}
            </Flex>
          </Flex>
        </SidebarProvider>
      </ConversationsProvider>
    </Authenticator>
  );
};
