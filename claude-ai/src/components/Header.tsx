import { Flex, Heading, Button, ColorMode } from "@aws-amplify/ui-react";
import { useSidebar } from "@/providers/SidebarProvider";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  colorMode: ColorMode;
}

export const Header = ({ colorMode }: HeaderProps) => {
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
      <Flex flex="1" justifyContent="flex-end">
        <ThemeToggle initialValue={colorMode} />
      </Flex>
    </Flex>
  );
}; 