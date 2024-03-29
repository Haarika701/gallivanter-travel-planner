class ApplicationController < ActionController::API
    include ActionController::Cookies

    private
    
    def current_user
        User.find_by(id: session[:user_id])
      end
    
      def is_authenticated
      
        render json: {errors: ["User not logged in"]}, status: :unauthorized unless current_user
      end
  
      def render_not_found
        render json: { errors: ["User not found"] }, status: :not_found
      end
    
      def record_invalid (invalid)
        render json: { errors: [invalid.record.errors.full_messages]}, status: :unprocessable_entity
      end
    
end
