export const useAuth = () => {
  const toast = useToast();
  const supabase = useSupabaseClient();

  const login = async (email: string, password: string) => {
    try {
      return await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
    } catch (error) {
      toast.add({
        title: "Error",
        description:
          error instanceof Error ? error.message : "An error occurred",
        color: "error",
      });
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const { data } = await supabase.auth.signUp({
        email,
        password,
      });

      return data;
    } catch (error) {
      toast.add({
        title: "Error",
        description:
          error instanceof Error ? error.message : "An error occurred",
        color: "error",
      });
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return {
    login,
    signUp,
    logout,
  };
};
