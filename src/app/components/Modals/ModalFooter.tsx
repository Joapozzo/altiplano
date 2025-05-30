// Subcomponente para el footer del modal
const ModalFooter = () => {
    return (
        <div className="text-center text-sm text-gray-500 pt-4 border-t border-gray-100">
            Tu información está segura. Leé nuestra{" "}
            <a href="#" className="text-amber-600 hover:underline">
                Política de Privacidad
            </a>
        </div>
    );
};

export default ModalFooter;