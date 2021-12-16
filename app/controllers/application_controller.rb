class ApplicationController < ActionController::API
    include ActionController::Cookies

    def current_user
        User.find_by(id: session[:user_id])
      end
    
  
      def render_not_found
        render json: { errors: ["Item not found"] }, status: :not_found
      end
    
      def record_invalid (invalid)
        render json: { errors: [invalid.record.errors.full_messages]}, status: :unprocessable_entity
      end
    
end
