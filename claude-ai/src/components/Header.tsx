import { Flex, Heading, Button } from "@aws-amplify/ui-react";
import { useSidebar } from "@/providers/SidebarProvider";

export const Header = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <Flex
      direction="row"
      alignItems="center"
      padding="1rem"
      backgroundColor="var(--amplify-colors-background-secondary)"
      width="100%"
      style={{
        borderBottom: "1px solid var(--amplify-colors-border-primary)"
      }}
    >
      <Button
        onClick={toggleSidebar}
        variation="link"
        size="small"
        marginRight="1rem"
      >
        {isOpen ? "←" : "→"}
      </Button>
      <Heading level={1} fontSize="1.5rem" color="var(--amplify-colors-font-primary)">
        AI Assistant
      </Heading>
    </Flex>
  );
}; 